import React from 'react';
import { Text } from '../index';
import { Wrapper } from './styled';

const Footer = () => {
  return (
    <Wrapper>
      <Text theme="text5">홈</Text>
      <Text theme="text5">관심</Text>
      <Text theme="text5">현재가</Text>
      <Text theme="text5">주문</Text>
      <Text theme="text5">잔고</Text>
      <Text theme="text5_other">메뉴</Text>
    </Wrapper>
  );
};

export default Footer;
