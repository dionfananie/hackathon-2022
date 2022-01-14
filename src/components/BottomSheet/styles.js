import { css, keyframes } from "@emotion/css";

const overlayAnim = keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 0.7;
  }
`;

const bottomSheetAnim = keyframes`
  0% {
    bottom: -100%;
  } 100% {
    bottom: 0;
  }
`;

export const bottomSheetWrapper = (display) => css`
  position: absolute;
  bottom: ${display ? 0 : "-100%"};
  left: 0;
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 0 0;
  transition: 400ms bottom cubic-bezier(0.2, 0.64, 0.21, 1);
  ${display &&
  css`
    animation: ${bottomSheetAnim} 400ms cubic-bezier(0.2, 0.64, 0.21, 1) 0s 1;
  `};
`;
export const bottomSheetHeader = css`
  height: 56px;
  width: 100%;
  padding: 16px;
`;
export const bottomSheetClose = css`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
`;
export const bottomSheetContent = css`
  padding: 0 16px 68px;
`;
export const bottomSheetBG = (display, isOpen) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2e3137;
  opacity: ${display ? 0.7 : 0};
  transition: 400ms opacity cubic-bezier(0.2, 0.64, 0.21, 1);
  ${display &&
  css`
    animation: ${overlayAnim} 400ms cubic-bezier(0.2, 0.64, 0.21, 1) 0s 1;
  `};
`;
