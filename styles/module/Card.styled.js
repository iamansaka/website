import styled from "styled-components";

export const CardStyled = styled.div`
  .thumbnail {
    max-width: 600px;
    width: 100%;
    max-height: 400px;
    height: auto;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center center;
    }
  }
`;

export const CardLinkStyled = styled.a`
  display: inline-block;
  margin: 1em 0;
  text-decoration: underline;
  text-underline-offset: 4px;
`;
