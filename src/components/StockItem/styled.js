import styled from 'styled-components';

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Cell = styled.div`
  padding: 10px;
  text-align: center;
  background-color: white;
`;
