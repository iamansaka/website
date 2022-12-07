import styled from "styled-components";
import { device } from "../device";

export const StyledNavigation = styled.nav`
  @media ${device.sm} {
    width: 100%;
    display: block;
    margin-top: 25px;
  }
`;

export const StyledNavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  pointer-events: all;
  gap: 1.5rem;
  @media ${device.sm} {
    flex-direction: column;
  }
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
