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

  @keyframes animate-rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
`;

export default Animation;
