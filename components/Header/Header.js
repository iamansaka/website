// Librairie
import React, { useState, useEffect } from "react";

// Composants
import Logo from "../Logo/Logo";
import TextWrapper from "../TextWrapper/TextWrapper";
import Navigation from "../Navigation/Navigation";

// Styled
import { StyledHeader, ButtonBurgerStyled } from "../../styles/module/Header.styled";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [largeurEcran, setLargeurEcran] = useState();

  const handleShowMenu = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    const innerWidth = () => {
      if (window !== "undefined") {
        setLargeurEcran(window.innerWidth);
      }
    };

    window.addEventListener("resize", innerWidth);

    return () => {
      window.removeEventListener("resize", innerWidth);
    };
  }, []);

  return (
    <StyledHeader>
      <Logo url="/">
        <TextWrapper>アンサカ</TextWrapper>
      </Logo>
      <ButtonBurgerStyled onClick={handleShowMenu} menuOpen={menuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </ButtonBurgerStyled>
      {(menuToggle || largeurEcran > 768) && <Navigation />}
    </StyledHeader>
  );
}
