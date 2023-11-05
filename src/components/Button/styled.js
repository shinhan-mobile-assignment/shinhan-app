import styled from 'styled-components';

const ButtonStyles = {
  iconBtn: {
    width: '1.25rem', //20px
    height: '1.25rem', //20px
  },
  mainBtn: {
    width: '3.75rem', //60px
    height: '1.87rem', //30px
  },
  quickBtn:{
    width: '2.5rem', //20px
    height: '2.5rem', //20px
  },
  lookBtn:{
    width: '2.5rem', //20px
    height: '2.5rem', //20px
  }
};

export const StyledButton = styled.button`
  ${(props) => ButtonStyles[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  },

  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;
