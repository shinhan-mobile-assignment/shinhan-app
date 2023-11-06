import styled from 'styled-components';

const RankingItem = {
  stockRate_up: {
    padding: '0.15rem',
    background:"#FFD7D7",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.1rem',
  },
  stockRate_down: {
    padding: '0.15rem',
    background:"#DAFFFF",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.1rem',
  },
  stockInfo:{
    width: '10rem',
    height: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'left',
  },
  rankingItem: {
    width: '23rem',
    height: '1.5rem',
    background: "#FFF",
    padding: '0.5rem',
    margin: '0.5rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  
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



