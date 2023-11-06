import styled from 'styled-components';

const Ranking = {
  RankingTitle: {
    width: '23rem',
    height:'3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:'1rem',
  },
  RankingWrap: {
    width: '24rem',
    height: '24rem',
    background: "#FFF",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',

  }
  
};


export const StyledCard = styled.div`
  ${(props) => Ranking[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;



