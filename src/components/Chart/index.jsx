import React, { useState } from "react";
import { Text, Button, ChartItem, Daily } from '../../components';
import { StyledCard } from "./styled";

const Chart = () => {
  const [isKoreaSelected, setIsKoreaSelected] = useState(true);

  const handleButtonClick = () => {
    setIsKoreaSelected(!isKoreaSelected);
  };

  return (
    <StyledCard theme="ChartWrap">
      <Daily contents="[해외주식] 병합/분할/심볼변경/상장폐지 효..."></Daily>
      <StyledCard theme="boardInfo">
        <StyledCard theme="boardBtn">
          <Button theme="mainBtn" onClick={handleButtonClick}>
            <Text theme={isKoreaSelected ? "text3_click" : "text3_other"}>국내</Text>
          </Button>
          <Button theme="mainBtn" onClick={handleButtonClick}>
            <Text theme={!isKoreaSelected ? "text3_click" : "text3_other"}>해외</Text>
          </Button>
        </StyledCard>
        <Text theme={isKoreaSelected ? "text4_other" : "text4_click"}>{isKoreaSelected ? "국내 시장 마감" : "미국 정규장 진행 중"}</Text>
      </StyledCard>

      {isKoreaSelected ? (
        <StyledCard theme="chartCard">
          <ChartItem chartName="코스피" chartPrice={2502.37} chartChange={134.03} chartRate={5.66} chartStatus="장마감" country="kor"></ChartItem>
          <ChartItem chartName="코스닥" chartPrice={839.45} chartChange={57.40} chartRate={7.34} chartStatus="장마감" country="kor"></ChartItem>
        </StyledCard>
      ) : (
        <StyledCard theme="chartCard">
          <ChartItem chartName="나스닥" chartPrice={13490.10} chartChange={11.30} chartRate={0.6} chartStatus="미국 정규장 진행 중" country="usa"></ChartItem>
          <ChartItem chartName="다우" chartPrice={34061.32} chartChange={222.24} chartRate={0.66} chartStatus="미국 정규장 진행 중" country="usa"></ChartItem>
        </StyledCard>
      )}
    </StyledCard>
  );
};

export default Chart;
