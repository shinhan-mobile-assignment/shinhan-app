import React from 'react';
import { StockItem } from '../index';
import { Table, Cell } from './styled';

const Stock = () => {
  const StockList = [
    {
      cell1: '카카오',
      cell2: 6150,
      cell3: 41300,
      cell4: 2,
      cell5: '현금',
      cell6: '8.04%',
      cell7: 38225,
      cell8: 2,
    },
    {
      cell1: '삼성전자',
      cell2: 6150,
      cell3: 41300,
      cell4: 2,
      cell5: '현금',
      cell6: '8.04%',
      cell7: 38225,
      cell8: 2,
    },
  ];
  return (
    <>
      <Table>
        <Cell>종목명</Cell>
        <Cell>손익</Cell>
        <Cell>현재가</Cell>
        <Cell>보유수량</Cell>
        <Cell>구분</Cell>
        <Cell>수익률</Cell>
        <Cell>평균단가</Cell>
        <Cell>주문가능</Cell>
      </Table>
      {StockList.map((s, idx) => (
        <StockItem cellItem={s} key={idx} />
      ))}
    </>
  );
};

export default Stock;
