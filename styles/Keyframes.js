import { css } from "styled-components";

const Animation = css`
  @keyframes bounce {
    0% {
      opacity: 1;
      transform: translateX(0px) translateY(0) scale(1);
    }
    25% {
      opacity: 0;
      transform: translateX(10px) translateY(10px) scale(0.9);
    }
    26% {
      opacity: 0;
      transform: translateX(-10px) translateY(-10px) scale(0.9);
    }
    55% {
      opacity: 1;
      transform: translateX(0px) translateY(0) scale(1);
    }
  }
`;

export default Animation;
