import styled from 'styled-components';

const QuickMenu = {
  inner: {
    width: '23rem',
    height:'3.5rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  quickMenu: {
    width: '24rem',
    height: '4.5rem',
    boxSizing: 'border-box',
    background: "#FFF",
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  }
  
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



