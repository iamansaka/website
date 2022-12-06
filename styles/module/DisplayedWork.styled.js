import styled from "styled-components";
import { device } from "../device";

export const ProjectItemStyled = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.3rem;
  border-radius: 10px;
  cursor: pointer;
  counter-increment: project 1;
  transition: all 0.2s ease-out;
  @media ${device.md} {
    padding: calc(1.3rem / 1.3);
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px 12px rgba(211, 211, 211, 0.7);
    z-index: 2;
  }
  &:nth-child(2n) {
    position: relative;
    top: -110px;
    @media ${device.md} {
      top: 0;
    }
  }

  > * {
    margin-bottom: 13px;
  }

  .category {
    font-size: 0.96rem;
    margin-bottom: 5px !important;

    &::before {
      content: "0" counter(project) " - ";
      display: inline-block;
    }
  }

  h3 {
    font-weight: bold;
    text-decoration: underline;
    text-transform: uppercase;
    text-underline-offset: 8px;
  }

  p {
    width: calc(100% / 1.7);
    @media ${device.md} {
      width: 100%
    }
  }

  img {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 480px;
    z-index: 1;
    border-radius: 5px;
    @media ${device.md} {
      height: 100%;
    }
  }
`;
