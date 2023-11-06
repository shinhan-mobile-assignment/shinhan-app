import React from "react";
import { Text, RankingItem } from '../../components';
import { StyledCard } from "./styled";

const RankingItems = [
  {
    rankNo: 1,
    stockName: "삼성전자",
    stockTrade: 244772,
    stockPrice: 81600,
    changeRate: 1.23,
  },
  {
    rankNo: 2,
    stockName: "SK하이닉스",
    stockTrade: 102536,
    stockPrice: 122000,
    changeRate: -0.98,
  },
  {
    rankNo: 3,
    stockName: "현대자동차",
    stockTrade: 373823,
    stockPrice: 200500,
    changeRate: 2.57,
  },
  {
    rankNo: 4,
    stockName: "NAVER",
    stockTrade: 77421,
    stockPrice: 287000,
    changeRate: 0.75,
  },
  {
    rankNo: 5,
    stockName: "신한지주",
    stockTrade: 165954,
    stockPrice: 44500,
    changeRate: 1.11,
  },
  {
    rankNo: 6,
    stockName: "LG화학",
    stockTrade: 69872,
    stockPrice: 708000,
    changeRate: 3.45,
  },
  {
    rankNo: 7,
    stockName: "POSCO",
    stockTrade: 120657,
    stockPrice: 210500,
    changeRate: -0.84,
  },
  {
    rankNo: 8,
    stockName: "삼성바이오로직스",
    stockTrade: 49251,
    stockPrice: 782000,
    changeRate: 2.04,
  },
  {
    rankNo: 9,
    stockName: "셀트리온",
    stockTrade: 92345,
    stockPrice: 234500,
    changeRate: -1.20,
  },
  {
    rankNo: 10,
    stockName: "삼성SDI",
    stockTrade: 56129,
    stockPrice: 403500,
    changeRate: -0.73,
  },
];

const Ranking = () => {
  return (
    <StyledCard theme="RankingWrap">
      <StyledCard theme="RankingTitle">
        <Text theme="Text1">실시간 시세랭킹</Text>
        <Text theme="Text1"> &gt; </Text>
      </StyledCard>
      <StyledCard theme="RankingItems">
        {RankingItems.slice(0, 7).map((item, index) => (
          <RankingItem
            key={index}
            rankNo={item.rankNo}
            stockName={item.stockName}
            stockTrade={item.stockTrade}
            stockPrice={item.stockPrice}
            changeRate={item.changeRate}
          />
        ))}
      </StyledCard>
    </StyledCard>
  );
};

export default Ranking;
