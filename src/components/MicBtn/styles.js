import { css, keyframes } from "@emotion/css";

const shadow = "0 1px 6px 0 rgba(49, 53, 59, 0.12)";
const pulseFull = "0 0 0 0 rgba(42, 191, 112, 0.4)";
const pulseNull = "0 0 0 10px rgba(42, 191, 112, 0)";
const timing = "cubic-bezier(0.2, 0.64, 0.21, 1)";

const pulse = keyframes`
  0% {
    box-shadow: ${shadow}, ${pulseFull};
  }
  70% {
      box-shadow: ${shadow}, ${pulseNull};
  }
  100% {
      box-shadow: ${shadow}, ${pulseNull};
  }
`;

const beat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

const show = keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`;

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const micFloatingBtn = (active) => css`
  position: fixed;
  bottom: 60px;
  left: calc(50% - 24px);
  width: 48px;
  height: 48px;
  background-color: rgb(42, 191, 112);
  border-radius: 50%;
  box-shadow: ${shadow}, ${pulseFull};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 400ms all ${timing};
  cursor: pointer;
  ${active &&
  css`
    animation: ${pulse} 2s infinite ${timing};
  `};
`;

export const loadingIcon = css`
  width: 24px;
  height: 24px;
  border: 3px solid white;
  border-radius: 50%;
  border-right-color: transparent;
  animation: ${spinner} 1s linear 0s infinite, ${show} 400ms ${timing} 0s 1;
`;

export const micIcon = (active) => css`
  ${active &&
  css`
    animation: ${beat} 2s infinite;
  `};
`;
