import styled from "styled-components";

export const SectionWorksDisplay = styled.section`
  margin-top: 100px;
  margin-bottom: 150px;
`;

export const TitleWorksStyled = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-family: "RightGrotesk", sans-serif;
  font-size: 3.125rem;

  &::before {
    content: "01/";
    display: inline-block;
    letter-spacing: 3px;
    font-size: calc(3.125rem / 2);
    margin-right: 0.25rem;
    opacity: 0.4;
  }
`;
