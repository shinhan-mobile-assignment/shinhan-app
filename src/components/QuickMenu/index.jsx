import React from "react";
import { Button, Text, QuickMenuBtn } from '../../components';
import { StyledCard } from "./styled";


const quickMenuItems = [
  { title: '증시일정 1', imageSource: require('./../../assets/images/QuickMenu1.svg') },
  { title: '조건검색', imageSource: require('./../../assets/images/QuickMenu2.svg') },
  { title: '커뮤니티', imageSource: require('./../../assets/images/QuickMenu3.svg') },
  { title: '신한+ 쿠폰', imageSource: require('./../../assets/images/QuickMenu4.svg') },
  { title: '공모주 일정', imageSource: require('./../../assets/images/QuickMenu5.svg') },
  { title: '마이데이터', imageSource: require('./../../assets/images/QuickMenu6.svg') },
];


const QuickMenu = ({}) => {
  return (
    <StyledCard theme="quickMenu">
      <Text theme="text2_click">Quick Menu</Text>
      <StyledCard theme="inner">
          {quickMenuItems.map((item, index) => (
            <QuickMenuBtn key={index} title={item.title} imageSource={item.imageSource}></QuickMenuBtn>
          ))}
        </StyledCard>
    </StyledCard>

  );
};

export default QuickMenu;
