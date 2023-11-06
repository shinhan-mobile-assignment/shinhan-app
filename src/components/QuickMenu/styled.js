import styled from 'styled-components';

const QuickMenu = {
  inner: {
    width: '100vw',
    height: '11vh',
    display: 'flex',
    padding: '1vh 1vw',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  quickMenu: {
    width: '98vw',
    height: '13vh',
    background: 'white',
    display: 'flex',
    padding: '0 1vw',
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
