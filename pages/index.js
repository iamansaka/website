// Librairie
import React from "react";
import Button from "../components/Button/Button";

// Composant
import TextWrapper from "../components/TextWrapper/TextWrapper";

// Styled
import StyledContainer from "../styles/base/Container.styled";
import {
  StyledHeadingSection,
  StyledHeadingInfos,
  StyledHeadingTitle,
  StyledActions,
} from "../styles/pages/Home.styled";

export default function Home() {
  return (
    <StyledContainer>
      <StyledHeadingSection id="heading">
        <StyledHeadingTitle>
          Designer <span>&</span> <span>Developer</span>
        </StyledHeadingTitle>
        <StyledHeadingInfos>
          Hey, je m'appelle Ansaka, je suis un développeur web Ui/Ux en alternance chez
          Dawan® situé à Toulouse, FRANCE. Spécialisé dans la conception et l'intégration
          de sites Web au pixel près.
        </StyledHeadingInfos>
        <StyledActions>
          <Button url="/archives">Voir mes projets</Button>
          <Button url="/archives">En savoir plus</Button>
        </StyledActions>
        <svg
          width="100"
          height="100"
          viewBox="0 0 33 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            transform="rotate(90 15.379 24.264)"
            points="39.643 23.264 39.643 25.264 -8.885 25.264 -8.885 23.264"
          ></polygon>
          <path d="M-.953 36.304a1 1 0 0 1 1.255-.651 32.553 32.553 0 0 1 9.247 4.66 28.022 28.022 0 0 1 6.692 7.709 1 1 0 0 1-1.724 1.014 25.985 25.985 0 0 0-6.176-7.13 30.512 30.512 0 0 0-8.643-4.347 1 1 0 0 1-.651-1.255Z"></path>
          <path d="M30.456 35.654a1 1 0 1 1 .604 1.906 30.474 30.474 0 0 0-8.605 4.317 26.021 26.021 0 0 0-6.214 7.159 1 1 0 1 1-1.724-1.014 28.06 28.06 0 0 1 6.73-7.738 32.512 32.512 0 0 1 9.21-4.63Z"></path>
        </svg>
      </StyledHeadingSection>
    </StyledContainer>
  );
}
