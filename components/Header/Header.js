// Librairie
import React from "react";

// Composants
import Logo from "../Logo/Logo";
import TextWrapper from "../TextWrapper/TextWrapper";
import Navigation from "../Navigation/Navigation";

// Styled
import { StyledHeader } from "../../styles/module/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Logo url="/">
        <TextWrapper>アンサカ</TextWrapper>
      </Logo>
      <Navigation />
    </StyledHeader>
  );
}
