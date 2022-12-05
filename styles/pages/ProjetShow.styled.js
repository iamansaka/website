import styled from "styled-components";
import { device } from "../device";

export const IntroStyled = styled.div`
  border-bottom: 1px solid #eee;
  padding: 2rem 0;
`;

export const LinkStyled = styled.div`
  display: inline-block;
  padding: 1px 16px 1px 12px;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;

  > a {
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 1.5;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const TitleStyled = styled.h1`
  /*font-size: 3.75rem;*/
  font-size: 6em;
  font-family: "RightGrotesk", sans-serif;
  text-transform: uppercase;
  @media ${device.lg} {
    font-size: 4em;
  }
  @media ${device.md} {
    font-size: 3em;
  }
  @media ${device.sm} {
    font-size: 2em;
  }
`;

export const ListItemStyled = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 60px;

  @media ${device.md} {
    gap: 20px;
    margin-bottom: calc(3.75rem / 2);
  }

  > li {
    margin-top: 3.75rem;
    @media ${device.md} {
      margin-top: 20px;
    }

    strong {
      font-weight: 600;
      font-size: 17px;
    }
  }
`;

export const ThumbnailImageStyled = styled.div`
  background-color: gray;
  margin-block: 60px;
  margin-inline: 26px;
  border-radius: 5px;
  height: 650px;
  object-fit: cover;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const WrapperStyled = styled.div`
  border-bottom: 1px solid #eee;
  margin: 10px 0;
  h3 {
    font-family: "RightGrotesk", sans-serif;
    text-transform: uppercase;
    color: #101118;
    line-height: 1;
    font-weight: 700;
  }
  p {
    font-size: 1.1em;
    line-height: 1.6em;
    margin-top: 1em;
    margin-bottom: 1.6em;
    width: 50%;
    @media ${device.md} {
      width: 100%;
    }
  }
`;
