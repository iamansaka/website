import React from "react";

// Composant
import Button from "../components/Button/Button";
import DisplayedWorks from "../components/DisplayedWorks/DisplayedWorks";

// Styled
import StyledContainer from "../styles/base/Container.styled";
import {
  HeroStyled,
  HeadingTitleStyled,
  IntroBlockStyled,
  RowStyled,
} from "../styles/pages/Home.styled";

export default function index() {
  return (
    <StyledContainer>
      <HeroStyled col={12}>
        <HeadingTitleStyled>
          <span className="home_span">
            Designer <span className="is_and">&</span>
          </span>
          <span className="home_span is_dev">Developer</span>
        </HeadingTitleStyled>
        <IntroBlockStyled>
          <p>
            Hey, je m'appelle Ansaka, je suis un développeur Symfony React en alternance
            chez Dawan® situé à Toulouse, FRANCE. Spécialisé dans la conception et
            l'intégration de sites web au pixel près.
          </p>
          <RowStyled>
            <Button url="/archives">Voir mes projets</Button>
            <Button url="/archives">En savoir plus</Button>
          </RowStyled>
        </IntroBlockStyled>
      </HeroStyled>
      <DisplayedWorks />
    </StyledContainer>
  );
}
