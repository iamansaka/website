// Librairie
import React from "react";
import Link from "next/link";
import {navLinks} from "../lib/config"

// Styled
import StyledContainer from "../styles/base/Container.styled";
import {NotFoundStyled, LinkStyled} from "../styles/pages/NotFound";

function PageNotFound() {
    return (
        <StyledContainer>
            <NotFoundStyled>
                <h1>Page not Found <span>404</span></h1>
                <Link href={navLinks[0].url} passHref legacyBehavior>
                    <LinkStyled>↳ Retour à l'accueil</LinkStyled>
                </Link>
            </NotFoundStyled>
        </StyledContainer>
    )
}

export default PageNotFound;