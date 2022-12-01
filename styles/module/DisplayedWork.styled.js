import styled from "styled-components";

export const WorksItemStyled = styled.div`
  padding: 4.625rem 1.5rem;
  display: flex;
  flex-flow: row;

  &:not(:last-child) {
    border-bottom: 1px solid var(--dark);
  }

  &:hover {
    background-color: red;
  }
`;
