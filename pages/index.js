// Librairies
import React from "react";
import Link from "next/link";

// Composant
// import Button from "../components/Button/Button";
import DisplayedWorks from "../components/DisplayedWorks/DisplayedWorks";

// Styled
import StyledContainer from "../styles/base/Container.styled";
import {HeadingTitleStyled, HeroStyled, IntroBlockStyled, RowStyled,} from "../styles/pages/Home.styled";

export default function index() {
    return (
        <>
            <StyledContainer>
                <HeroStyled col={12}>
                    <HeadingTitleStyled>
            <span className="home_span">
              Designer <span className="is_and">and</span>
            </span>
                        <span className="home_span is_dev">Developer.</span>
                    </HeadingTitleStyled>
                    <IntroBlockStyled>
                        <p>
                            Hey, je m'appelle Ansaka, je suis un développeur Symfony React en alternance
                            chez Dawan® situé à Toulouse, FRANCE. Spécialisé dans la conception et
                            l'intégration de sites web au pixel près.
                        </p>
                        <RowStyled>
                            <Link href="/work">
                                <a className="home_button">
                                    <ion-icon name="globe-outline"></ion-icon>
                                    Voir mes projets
                                </a>
                            </Link>
                            <Link href="/a-propos">
                                <a className="home_button">
                                    <ion-icon name="add-outline"></ion-icon>
                                    En savoir plus
                                </a>
                            </Link>
                        </RowStyled>
                    </IntroBlockStyled>
                </HeroStyled>
            </StyledContainer>
            {/* <Tricker /> */}
            <StyledContainer>
                <DisplayedWorks/>
            </StyledContainer>
        </>
    );
}
