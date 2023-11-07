import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 100;
  background: white;
  color: #ececec;
  width: 50vw;
  border-radius: 1vw;
  border: 0.5px solid #fdfafa;
  box-shadow: 2px 3.5px 4px -3px gray;
  padding: 5vw;
`;

export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 9vh;
  text-align: center;
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  text-align: center;
`;

export const Image = styled.img`
  margin: 1vw;
  width: 10vw;
`;
