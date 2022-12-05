import styled from "styled-components";

export const TitleStyled = styled.h2`
  font-size: 3rem;
  display: block;

  &:before {
    content: "/01";
    font-size: 0.8rem;
    display: block;
    margin-bottom: -.4rem;
    color: #595959;
    opacity: .5;
  }
`

export const BioStyled = styled.div`
  width: 50%;
  justify-self: flex-end;
`