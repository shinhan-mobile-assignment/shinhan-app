import styled from 'styled-components';

const RankingItem = {
  stockRate_up: {
    width: '2.7rem',
    height: '1rem',
    padding: '0.15rem',
    background: '#FFD7D7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.1rem',
  },
  stockRate_down: {
    width: '2.7rem',
    height: '1rem',
    padding: '0.15rem',
    background: '#DAFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.1rem',
  },
  stockInfo: {
    width: '10rem',
    height: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'left',
  },
  rankingItem: {
    width: '100vw',
    height: '1.5rem',
    background: '#FFF',
    padding: '0.5rem',
    marginBottom: '0.4rem',
    textAlign: 'right',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr 1fr',
    alignItems: 'center',
  },
};

export const StyledCard = styled.div`
  ${(props) => RankingItem[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;
