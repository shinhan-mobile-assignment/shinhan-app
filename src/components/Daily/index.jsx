import React from 'react';
import { StyledCard, Text } from '../../components';

const DailyNotice = ({ contents }) => {
  return (
    <StyledCard contents={contents}>
      <StyledCard theme="noticeCard">
        <Text theme="text2_click">Daily</Text>
        <Text theme="text4"> {contents} </Text>
      </StyledCard>
    </StyledCard>
  );
};

export default DailyNotice;
