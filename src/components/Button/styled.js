import styled from 'styled-components';

const ButtonStyles = {
  btn1: {
    width: '7vw',
    height: '5vh',
    borderRadius: '15px',
  },
};

export const StyledButton = styled.button`
  ${(props) => ButtonStyles[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }

  ,
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;
