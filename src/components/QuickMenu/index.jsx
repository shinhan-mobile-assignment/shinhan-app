import React from 'react';
import { Text, QuickMenuBtn } from '../../components';
import { StyledCard } from './styled';
import q1 from '../../assets/images/QuickMenu1.svg';
import q2 from '../../assets/images/QuickMenu2.svg';
import q3 from '../../assets/images/QuickMenu3.svg';
import q4 from '../../assets/images/QuickMenu4.svg';
import q5 from '../../assets/images/QuickMenu5.svg';
import q6 from '../../assets/images/QuickMenu6.svg';

const quickMenuItems = [
  {
    title: '증시일정',
    imageSource: q1,
  },
  {
    title: '조건검색',
    imageSource: q2,
  },
  {
    title: '커뮤니티',
    imageSource: q3,
  },
  {
    title: '신한+ 쿠폰',
    imageSource: q4,
  },
  {
    title: '공모주 일정',
    imageSource: q5,
  },
  {
    title: '마이데이터',
    imageSource: q6,
  },
];

const QuickMenu = () => {
  return (
    <StyledCard theme="quickMenu">
      <Text theme="menu">Quick Menu</Text>
      <StyledCard theme="inner">
        {quickMenuItems.map((item, index) => (
          <QuickMenuBtn
            key={index}
            title={item.title}
            imageSource={item.imageSource}
          ></QuickMenuBtn>
        ))}
      </StyledCard>
    </StyledCard>
  );
};

export default QuickMenu;
