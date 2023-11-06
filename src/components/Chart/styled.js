import styled from 'styled-components';

const Chart = {
  ChartWrap:{
    width: '24rem',
    height: '24rem',
    padding: '1rem', 

    background: "#FFF",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  boardInfo:{
    width: '20.3125rem', 
    height: '1.25rem',
    margin: '0.5rem', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  boardBtn:{
    width: '7.5rem', 
    height: '1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  chartCard: {
    width: '20.3125rem', 
    height: '11.875rem',
    margin: '0.5rem', 
    flexShrink: 0, 
    borderRadius: '10px',
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ChartWrap: {
    width: '24rem',
    height: '18rem',
    background: "#F7F7F7",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',

  }
  
};


export const StyledCard = styled.div`
  ${(props) => Chart[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;



