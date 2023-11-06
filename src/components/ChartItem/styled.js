import styled from 'styled-components';

const ChartItem = {
  chartItem: {
    width: '8rem',
    height: '5rem',
    padding: '0.5rem',
    margin: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  chartInfo: {
    width: '5rem',
    height: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rateInfo: {
    width: '5rem',
    height: '1.5rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stockInfo: {
    width: '10rem',
    height: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
};

export const StyledCard = styled.div`
  ${(props) => ChartItem[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 20%;
  height: auto;
`;
