import React from "react";
import styled from "styled-components";

const StyledTextWrapper = styled.div`
  position: relative;

  &:hover .word {
    transform: translateY(-100%) rotateX(-90deg);
  }

  &:hover .word_2 {
    transform: translateY(0%) rotateX(0deg);
  }

  span {
    display: block;
    will-change: transform;
    transition: all 0.5s;
  }

  .word {
    transform-origin: bottom;
  }

  .word_2 {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top;
    transform: translateY(100%) rotateX(-90deg);
  }
`;

export default function TextWrapper({ children }) {
  return (
    <StyledTextWrapper>
      <span className="word">{children}</span>
      <span className="word_2">{children}</span>
    </StyledTextWrapper>
  );
}
