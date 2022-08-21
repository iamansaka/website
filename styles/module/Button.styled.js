import styled from "styled-components";

export const StyledButton = styled.a`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    background-color: var(--blue);
    border-radius: 100%;

    > svg {
      width: 15px;
    }
  }

  &:hover svg {
    animation-name: bounce;
    animation-duration: 1.4s;
    animation-delay: 0.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;
