import styled from "styled-components";

export const TrickerStyled = styled.div`
  width: 100%;
  overflow: hidden;
  /* background-color: var(--dark); */
  padding: 1rem 0;
`;

export const TrickerListStyled = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  white-space: nowrap;
  width: fit-content;
  will-change: transform;
  border-top: 1px solid var(--dark);
  border-bottom: 1px solid var(--dark);
  transform: translate(${({ positionScroll }) => `-${positionScroll / 2}px, 0`});
`;

export const TrickerItemStyled = styled.li`
  color: var(--dark);
  text-transform: uppercase;
  font-family: "RightGrotesk", sans-serif;
  font-weight: 400;
  font-size: 8rem;
  margin-right: 20px;
  &::after {
    content: "";
    display: inline-block;
    height: 50px;
    width: 50px;
    background: url("./images/Red_asterisk.svg");
    background-size: 250px;
    margin-left: 20px;
    translate: 0 -25%;
    animation: animate-rotate 15s linear infinite;
  }
`;
