import styled from 'styled-components';

const textStyles = {
  text1: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#333333',
  },
};

export const StyledText = styled.p`
  ${(props) => textStyles[props.theme]}
`;
