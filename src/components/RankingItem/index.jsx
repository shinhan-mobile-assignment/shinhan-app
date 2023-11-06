import React from "react";
import { Text } from '../../components';
import { StyledCard } from "./styled";

const RankingItem = ({ rankNo, stockName, stockTrade, stockPrice, changeRate }) => {
  let text1UpTheme = "text1_up";
  let changeRateTheme = "text2_up";
  let stockRate = "stockRate_up";

  if (changeRate > 0) {
    text1UpTheme = "text1_up";
    changeRateTheme = "text2_up";
    stockRate = "stockRate_up";

  } else if (changeRate < 0) {
    text1UpTheme = "text1_down"; 
    changeRateTheme = "text2_down";
    stockRate = "stockRate_down";
  }

  return (
    <StyledCard theme="rankingItem">
      <Text theme="text1_click">{rankNo}</Text>
      <StyledCard theme="stockInfo">
        <Text theme="text2">{stockName}</Text>
        <Text theme="text4_other">거래량 {stockTrade}주</Text>
      </StyledCard>
      <Text theme={text1UpTheme}>{stockPrice}</Text>
      <StyledCard theme={stockRate}>
        <Text theme={changeRateTheme}>{changeRate}%</Text>
      </StyledCard>
    </StyledCard>
  );
};

export default RankingItem;
