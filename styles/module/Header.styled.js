import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.16vw;
  padding-bottom: 1.5rem;
  /* padding-inline: 8.8541666667vw; */
  padding-inline: 17.8541666667vw;
  border-bottom: 1px solid var(--dark);
`;

export const ButtonBurgerStyled = styled.button`
  position: relative;
  width: 2rem;
  height: 2rem;
  background: transparent;
  cursor: pointer;
  z-index: 90;

  span {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: #000;
    transition: 1s cubic-bezier(0.26, 1, 0.48, 1);

    &:nth-of-type(1) {
      transform: ${(props) =>
        props.menuOpen ? `translateY(0) rotate(-45deg)` : `translateY(-8px)`};
    }

    &:nth-of-type(2) {
      opacity: ${(props) => (props.menuOpen ? `0` : `1`)};
    }

    &:nth-of-type(3) {
      transform: ${(props) =>
        props.menuOpen ? `translateY(0) rotate(45deg)` : `translateY(8px)`};
    }
  }
`;
