import styled from "styled-components";

export const TrickerStyled = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: var(--dark);
  padding: 2rem 0;
`;

export const TrickerListStyled = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  /* gap: 20px; */
  white-space: nowrap;
  width: fit-content;
  will-change: transform;
`;

export const TrickerItemStyled = styled.li`
  color: var(--white);
  text-transform: uppercase;
  font-family: "RightGrotesk", sans-serif;
  font-weight: 400;
  font-size: 8rem;
  margin-right: 20px;
`;
