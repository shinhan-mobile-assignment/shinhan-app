import styled from 'styled-components';

const Daily = {
  chartCard: {
    width: '20.3125rem', 
    height: '11.875rem', 
    flexShrink: 0, 
    borderRadius: '10px',
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  },
};

export const StyledButton = styled.button`
  ${(props) => Daily[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;

