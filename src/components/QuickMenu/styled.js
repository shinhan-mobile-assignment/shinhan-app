import styled from 'styled-components';

const QuickMenu = {
  inner: {
    width: '98vw',
    height: '11vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quickMenu: {
    width: '98vw',
    height: '12vh',
    background: 'white',
    display: 'flex',
    padding: '1.5vh 1vw',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '2vh',
  },
};

export const StyledCard = styled.div`
  ${(props) => QuickMenu[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;
