import React, { useEffect, useRef } from 'react';
import { Container, Wrapper1, Wrapper3 } from './styled';
import { Text, Button } from '../index';

const AlertModal = ({ setModalOpen, selectedItem }) => {
  const modalRef = useRef(null);
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div ref={modalRef}>
      <Container>
        <Wrapper1>
          <Text theme="text4">{selectedItem.stockName}</Text>
          <Text theme="text4">{selectedItem.stockTrade}</Text>
          <Text theme="text4">{selectedItem.stockPrice}</Text>
          <Text theme="text4">{selectedItem.changeRate}</Text>
        </Wrapper1>
        <Wrapper3>
          <Button
            onClick={() => {
              closeModal();
            }}
          >
            닫기
          </Button>
        </Wrapper3>
      </Container>
    </div>
  );
};

export default AlertModal;
