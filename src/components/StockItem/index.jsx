import React from 'react';
import { Table, Cell } from './styled';

const StockItem = ({ cellItem }) => {
  return (
    <Table>
      <Cell>{cellItem.cell1}</Cell>
      <Cell>{cellItem.cell2}</Cell>
      <Cell>{cellItem.cell3}</Cell>
      <Cell>{cellItem.cell4}</Cell>
      <Cell>{cellItem.cell5}</Cell>
      <Cell>{cellItem.cell6}</Cell>
      <Cell>{cellItem.cell7}</Cell>
      <Cell>{cellItem.cell8}</Cell>
    </Table>
  );
};

export default StockItem;
