import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 60%;
  background: #e8f0fd;
  position: relative;
  box-shadow: 0px 1px 5px -3px gray;
`;

export const ImageWrapper = styled.img`
  width: 10%;
  height: auto;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
`;

export const UserInput = styled.input`
  height: 6vh;
  width: 60%;
  border: none;
  padding: 0% 20%;
  background: #e8f0fd;
  &:focus {
    outline: none;
  }
`;
