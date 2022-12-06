import styled from "styled-components";
import { device } from "../device";

export const SectionProjetsStyled = styled.main`
  position: relative;
  margin: 100px 0;

  h1 {
    font-size: 3rem;
    font-family: "RightGrotesk", sans-serif;
    text-transform: uppercase;
    color: #101118;
    line-height: 1;
    font-weight: 700;
  }
  .description {
    margin-top: 10px;
    margin-bottom: 150px;
    width: 50%;
    @media ${device.md} {
      margin-bottom: 50px;
    }
    @media ${device.md} {
      width: 100%;
    }
  }
`;

export const GridListStyled = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 2.3em;
  @media ${device.md} {
    grid-template-columns: 1fr;
  }
`;
