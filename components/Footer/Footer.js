// Librairie
import React from "react";
import {navLinks} from "../../lib/config"

// Styled
import StyledContainer from "../../styles/base/Container.styled";
import { FooterStyled } from "../../styles/module/Footer.styled"

function Footer() {
    return (
        <StyledContainer>
            <FooterStyled>
                <p>© 2022 — Mahamoudou Ansaka</p>
                <ul>
                    <li><a href={navLinks[3].url}>Linkedin</a></li>
                    <li><a href="https://github.com/iamansaka">Github</a></li>
                    <li><a href="">Curriculum</a></li>
                </ul>
            </FooterStyled>
        </StyledContainer>
    );
}

export default  Footer;