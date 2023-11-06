import styled from 'styled-components';

const textStyles = {
  text1: {
    fontWeight: 'bold',
    fontSize: '1rem', //15px
    color: '#000000',
  },
  text1_click: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#3F4CF9',
  },
  text1_up: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#FC2B4B',
  },
  text1_down: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#3376EB',
  },
  text2: {
    fontWeight: 'bold', //10px
    fontSize: '0.6rem', 
    color: '#000000',
  },
  text2_click: {
    fontWeight: 'bold',
    fontSize: '0.6rem', 
    color: '#3F4CF9',
  },
  text2_up: {
    fontWeight: 'bold',
    fontSize: '0.6rem', 
    color: '#FC2B4B',
  },
  text2_down: {
    fontWeight: 'bold',
    fontSize: '0.6rem', 
    color: '#3376EB',
  },
  text3: {
    fontWeight: 'Light',
    fontSize: '0.6rem',
    color: '#000000',
  },
  text3_click: {
    fontWeight: 'Light',
    fontSize: '0.6rem',
    color: '#FFFFFF',
  },
  text3_other: {
    fontWeight: 'Light',
    fontSize: '0.6rem',
    color: '#B0B0B0',
  },
  text4: {
    fontWeight: 'Light',
    fontSize: '0.5rem',
    color: '#000000',
  },
  text4_click: {
    fontWeight: 'Light',
    fontSize: '0.5rem',
    color: '#3F4CF9',
  },
  text4_other: {
    fontWeight: 'Light',
    fontSize: '0.5rem',
    color: '#A7A8AA',
  },

};

export const StyledText = styled.p`
  ${(props) => textStyles[props.theme]}
`;
