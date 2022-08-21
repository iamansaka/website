import styled from "styled-components";

export const StyledHeadingSection = styled.section`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  min-height: 100vh;
`;

export const StyledHeadingTitle = styled.h1`
  font-size: 10rem;
  line-height: 1.2;
  text-transform: uppercase;

  span {
    display: block;
    margin-top: -40px;

    &:first-child {
      display: inline;
      font-size: 1.667rem;
    }
  }
`;

export const StyledHeadingInfos = styled.p`
  font-size: 1.333rem;
  font-weight: 300;
  line-height: 1.2;

  max-width: 500px;
  width: 100%;

  margin-bottom: 2vw;
`;

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 2.667rem;
`;
