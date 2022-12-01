import styled from "styled-components";

export const HeroStyled = styled.section`
  width: 100%;
  height: calc(100vh - 190px);
  margin-top: 6.25rem;
  display: grid;
  grid-template-columns: ${({ col }) => `repeat(${col || 1}, 1fr)`};
  align-items: baseline;
  grid-gap: 1.5rem;
  grid-template-rows: 2fr 1fr;
  width: 100%;

  /* @media screen (max-width: 500px;) {
  } */
`;

export const HeadingTitleStyled = styled.h1`
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-start: span 12;
  grid-column-end: span 12;

  font-family: "RightGrotesk", sans-serif;
  font-size: 17vw;
  /* font-size: 10rem; */
  line-height: 0.7;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-bottom: 2rem;

  .home_span {
    display: inline-block;

    .is_and {
      font-size: 1.2rem;
      padding: 8px 16px;
      border: 1px solid var(--dark);
      border-radius: 50%;
    }
  }
`;

export const IntroBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.25em;
  grid-column: 6 / span 4;
`;

export const RowStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .home_button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    border: 1px solid var(--dark);
    border-radius: 6.25rem;
    vertical-align: middle;
    gap: 8px;
    padding: 0.6rem 1.125rem;
    transition: all 0.4s ease;
    cursor: pointer;
    &:hover {
      color: var(--white);
      background-color: var(--dark);
    }
  }
`;
