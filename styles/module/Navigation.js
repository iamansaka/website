import styled from "styled-components";

export const StyledNavigation = styled.nav``;

export const StyledNavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  pointer-events: all;
  gap: 1.5rem;
`;

export const StyledNavigationItem = styled.li`
  counter-increment: item 1;

  a::before {
    content: "0" counter(item) ".";
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 400;
    margin-right: 10px;
    opacity: 0.4;
  }

  a > div {
    display: inline-block;
  }
`;
