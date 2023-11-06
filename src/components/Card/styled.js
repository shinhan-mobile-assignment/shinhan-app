import styled from 'styled-components';

const CardStyles = {
  chartCard: {
    width: '20.3125rem',
    height: '11.875rem',
    flexShrink: 0,
    borderRadius: '10px',
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noticeCard: {
    marginTop: '1vh',
    width: '80vw',
    height: '1.875rem',
    borderRadius: '10px',
    background: '#E7EFFC',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

export const StyledCard = styled.div`
  ${(props) => CardStyles[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;
