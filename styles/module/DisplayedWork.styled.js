import styled from "styled-components";
import { device } from "../device";

export const ProjectItemStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 32px;
  counter-increment: project 1;
  padding: 3rem 0;
  border-bottom: 1px solid #b9b6b6;
  @media ${device.md} {
    grid-template-columns: 1fr;
  }
`;

export const ProjectThumbnailStyled = styled.div`
  position: relative;
  max-width: 600px;
  width: 55vw;
  @media ${device.md} {
    width: 100%;
  }

  .thumbnail_img {
    width: 100%;
    height: auto;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const ProjectContentStyled = styled.div`
  h3 {
    font-family: "RightGrotesk", sans-serif;
    text-transform: uppercase;
    color: #101118;
    line-height: 1;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  p {
    width: 70%;
  }
  .category {
    font-size: 0.9rem;
    text-transform: uppercase;

    &::before {
      content: "0" counter(project) " - ";
      display: inline-block;
      margin-right: 3px;
    }
  }

  .technologie {
    font-size: 0.85;
    opacity: 0.7;
    margin: 0.8rem 0;
  }
`;

export const ProjectLinkStyled = styled.a`
  text-decoration: underline;
  text-underline-offset: 6px;
  cursor: pointer;
`;

export const ProjectBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
