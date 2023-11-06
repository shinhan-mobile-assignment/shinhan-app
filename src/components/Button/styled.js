import styled from 'styled-components';

const ButtonStyles = {
  iconBtn: {
    width: '1.25rem', // 20px
    height: '1.25rem', // 20px
  },
  mainBtn: {
    width: '3.6rem', // 60px
    height: '1.6rem', // 30px
    borderRadius: '0.3rem',
    background: 'linear-gradient(90deg, #4A2AED 1.67%, #385EFD 100%)',
  },
  quickBtn: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '1.25rem',
    background: '#E8F0FD',
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'0.5rem',
    padding:'0.1rem',

  },
  
  lookBtn: {
    width: '2.5rem', // 20px
    height: '2.5rem', // 20px
  }
};

export const StyledButton = styled.button`
  ${(props) => ButtonStyles[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;

