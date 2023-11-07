import React from 'react';
import { Container, Wrapper1, Wrapper3 } from './styled';
import { Text, Button } from '../index';

const AlertModal = ({ setModalOpen, selectedItem }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
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
  );
};

export default AlertModal;
