import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

const fly = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 0;
    scale: 1.2;
  }
  30% {
    transform: translate(-20px, -20px);
    opacity: 0.5;
    scale: 0.7;
  }
  50% {
    transform: translate(10px, -5px);
    opacity: 1;
    scale: 0.5;
  }
  70% {
    transform: translate(20px, 0px);
    opacity: 0.5;
    scale: 0.7;
  }
  100% {
    transform: translate(30px, 30px);
    opacity: 0;
    scale: 1.2;
  }
`

export const Firefly = styled.div<{ top: string, left: string, animation: string }>`
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background: radial-gradient(closest-side, #ffffff, #ffe124, rgba(255, 255, 255, 0.1));
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${props => props.animation} ${fly} infinite alternate;
`
