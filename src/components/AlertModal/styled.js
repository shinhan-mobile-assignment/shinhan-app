import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: white;
  color: #ececec;
  width: 52vw;
  zIndex: 100,
  height: 25vw;
  border-radius: 1vw;
  border: 0.5px solid #fdfafa;
  box-shadow: 2px 3.5px 4px -3px gray;
  padding: 4vw;
`;

export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25vw;
  text-align: center;
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  text-align: center;
`;

export const Image = styled.img`
  margin: 1vw;
  width: 10vw;
`;
