import styled from "styled-components";
import { device } from "../device";

export const SectionWorksDisplay = styled.section`
  margin-top: 100px;
  margin-bottom: 150px;
`;

export const WorksHeaderStyled = styled.div`
  h2 {
    font-size: 1.3rem;
  }
`;

export const ProjectGridStyled = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 100px;
  grid-row-gap: 100px;
  margin: 44px 0;

  @media ${device.md} {
    grid-template-columns: 1fr;
    grid-row-gap: calc(100px / 2);
  }
`;
