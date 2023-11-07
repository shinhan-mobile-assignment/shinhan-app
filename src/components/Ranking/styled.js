import styled from 'styled-components';

const Ranking = {
  RankingTitle: {
    width: '90vw',
    height: '3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0.1rem',
  },
  RankingWrap: {
    width: '100vw',
    height: '24rem',
    background: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    marginBottom: '1.5vh',
  },
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
