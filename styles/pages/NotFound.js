import styled from "styled-components";
import {device} from "../device";

export const NotFoundStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 160px);

  h1 {
    text-align: center;
    font-family: "RightGrotesk", sans-serif;
    font-size: 1.875rem;
    line-height: 1;
    text-transform: uppercase;
    @media ${device.xs} {
      font-size: 1rem;
    }

    span {
      display: block;
      font-size: 30rem;
      margin-top: -6rem;
      @media ${device.md} {
        margin-top: -2rem;
        font-size: 20rem;
      }
      @media ${device.sm} {
        margin-top: -2rem;
        font-size: 15rem;
      }
      @media ${device.xs} {
        margin-top: -2rem;
        font-size: 10rem;
      }
    }
  }
`

export const LinkStyled = styled.a`
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 5px;
  transition: all .3s ease;
  &:hover {
    text-underline-offset: 8px;
    transition: all .3s ease;
  }
`