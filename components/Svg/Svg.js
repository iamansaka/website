import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  margin-top: 4vh;
`;

export const HeaderScrollArrow = (props) => {
  return (
    <StyledSvg
      width={props.height}
      height={props.width}
      viewBox="0 0 33 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.379 48.528h-2V0h2z" />
      <path d="M-.953 36.304a1 1 0 0 1 1.255-.651 32.553 32.553 0 0 1 9.247 4.66 28.022 28.022 0 0 1 6.692 7.709 1 1 0 0 1-1.724 1.014 25.985 25.985 0 0 0-6.176-7.13 30.512 30.512 0 0 0-8.643-4.347 1 1 0 0 1-.651-1.255Z" />
      <path d="M30.456 35.654a1 1 0 1 1 .604 1.906 30.474 30.474 0 0 0-8.605 4.317 26.021 26.021 0 0 0-6.214 7.159 1 1 0 1 1-1.724-1.014 28.06 28.06 0 0 1 6.73-7.738 32.512 32.512 0 0 1 9.21-4.63Z" />
    </StyledSvg>
  );
};
