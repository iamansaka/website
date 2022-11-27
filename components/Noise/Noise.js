import React from "react";
import styled, { keyframes } from "styled-components";

const noiseAnimation = keyframes`
  0% {background-position: 0 0;}
  100% {background-position: 100% 100%;}
`;

const StyledNoise = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background: url("./images/noise.png");
  animation: ${noiseAnimation} 0.5s steps(10) infinite;
  mix-blend-mode: soft-light;

  opacity: 1;
  pointer-events: none;

  z-index: 999;
`;

export default function Noise() {
  return <StyledNoise />;
}
