import React from 'react';
import { Container, Wrapper1, Wrapper2 } from './styled';
import { Text, Button } from '../index';

const AlertModal = ({ setModalOpen, selectedItem }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  let text1UpTheme = 'text1_up';
  let changeRateTheme = 'text2_up';

  if (selectedItem.changeRate > 0) {
    text1UpTheme = 'text1_up';
    changeRateTheme = 'text2_up';
  } else if (selectedItem.changeRate < 0) {
    text1UpTheme = 'text1_down';
    changeRateTheme = 'text2_down';
  }

  return (
    <div
      style={{
        top: '20vh',
        left: '20vw',
        position: 'fixed',
        zIndex: '100',
      }}
    >
      <Container>
        <Wrapper1 style={{ justifyContent: 'space-around' }}>
          <Text theme="text1">{selectedItem.stockName}</Text>
          <Text theme={text1UpTheme}>{selectedItem.stockTrade}</Text>
          <Wrapper2 style={{ alignItems: 'space-between' }}>
            <Text theme="text2">변동가</Text>
            <Text theme={changeRateTheme}>{selectedItem.stockPrice}</Text>
            <Text theme="text2">등락률</Text>
            <Text theme={changeRateTheme}>{selectedItem.changeRate}</Text>
          </Wrapper2>
          <Button
            theme="mainBtn"
            onClick={() => {
              closeModal();
            }}
          >
            <Text theme="text3_click">닫기</Text>
          </Button>
        </Wrapper1>
      </Container>
    </div>
  );
};

export default AlertModal;
