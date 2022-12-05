import styled from "styled-components";

export const StyledButton = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  img {
    height: 20px;
    transition: all 200ms ease;
  }
  .button_link {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 50px;
    max-width: 100%;
    font-size: 17px;
    font-weight: 500;
    transition: all 200ms ease;
    &:hover .button_outline {
      width: calc(100% + 30px);
    }
    &:hover img {
      transform: translateX(10px);
    }
  }
  .button_outline {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 0;
    border: 1px solid rgba(0, 0, 0, .22);
    border-radius: 50px;
    transition: all 200ms ease;
  }
  .button_text {
    position: relative;
    margin-right: 10px;
    margin-left: 20px;
  }
`;
