import styled from "styled-components";
import { device } from "../device";

export const TitleStyled = styled.h1`
  font-family: "RightGrotesk", sans-serif;
  font-size: 11rem;
  line-height: 1;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  margin-top: 100px;
  color: var(--dark);
  @media ${device.md} {
    font-size: 5rem;
  }
`;

export const IntroStyled = styled.div`
  position: relative;
  margin-top: 2rem;

  p {
    width: 40rem;
    margin-bottom: 16px;
    @media ${device.md} {
      width: 100%;
    }
  }

  strong {
    font-size: 0.9rem;
  }
`;

export const TitleSecondaryStyled = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 10px;
  opacity: 0.6;
  &::before {
    content: "/";
    margin-right: 5px;
  }
`;

export const SkillStyled = styled.ul`
  display: flex;
  flex-flow: row wrap;
  /* display: grid;
  grid-template-columns: repeat(3, minmax(140px, 200px)); */
  gap: 10px;
  margin: 20px 0;
  overflow: hidden;
  width: 30%;
  @media ${device.md} {
    width: 100%;
  }

  li {
    position: relative;
    border: 1px solid var(--dark);
    padding: 10px;
    border-radius: 50rem;
  }
`;

export const CodepenStyled = styled.div`
  ${TitleSecondaryStyled} {
    margin-top: 50px;
    padding-bottom: 10px;
    border-bottom: 1px solid #cdcdcd;
  }

  p {
    margin: 15px 0;
    width: 30%;
    @media ${device.md} {
      width: 100%;
    }
  }

  .link_codepen {
    color: var(--blue);
  }
`;

export const CodepenWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-self: flex-end;
  position: relative;
`

export const CodepenListStyled = styled.div`
  width: 50%;
  margin-top: 50px;
  margin-bottom: 100px;
`

export const CodepenItemStyled = styled.a`
  width: 100%;
  display: grid;
  position: relative;
  display: inline-block;
  
  > div {
    position: relative;
    display: grid;
    grid-template-columns: 28px 1fr 28px;
    grid-gap: 8px;
    padding: 2em 0;
    border-bottom: 1px solid #C7C7C7;
    align-items: center;
    &:not(:last-child) {
      border-bottom: none;
    }
    span {
      display: flex;
      justify-self: flex-end;
      opacity: .6;
    }
    p {
      font-size: 1.3rem;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export const ContactStyled = styled.a`
  display: inline-block;
  font-family: "RightGrotesk", sans-serif;
  text-transform: uppercase;
  font-size: 77px;
  margin-bottom: 30px;
  @media ${device.lg} {
    font-size: 40px;
  }
  @media ${device.md} {
    font-size: 30px;
  }
  @media ${device.sm} {
    font-size: 20px;
  }
`;
