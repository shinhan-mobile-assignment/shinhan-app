import styled from 'styled-components';

const QuickMenuBtn = {
  quick: {
    width: '3rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
};


export const StyledCard = styled.div`
  ${(props) => QuickMenuBtn[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;
