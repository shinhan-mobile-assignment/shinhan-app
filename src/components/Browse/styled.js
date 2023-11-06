import styled from 'styled-components';
import { keyframes } from 'styled-components';

const infiniteAnimation1 = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-100%);
  }
  50.1% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const infiniteAnimation2 = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
`;

export const SlideContainer = styled.div`
  width: 90vw;
  height: 45vw;
  padding: 2.5vw 5vw;
`;

export const SlideWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 5vw;
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  border-radius: 10px;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    z-index: 1;
  }
  &.original {
    animation: 50s linear infinite normal none running ${infiniteAnimation1};
  }
  &.clone {
    animation: 50s linear infinite ${infiniteAnimation2};
  }
  &.stop {
    animation-play-state: paused;
  }
`;

export const ListItem = styled.li`
  margin: 0 1vw;
  cursor: pointer;
  z-index: 2;
  transition: 0.3s;
  transform: scale(1);
  &:hover {
    transform: scale(0.98);
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
`;
