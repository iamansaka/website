// Librairie
import React from "react";

// Components

// Styled
import StyledContainer from "../styles/base/Container.styled";
import {TitleStyled, BioStyled} from "../styles/pages/A-propos.styled";

export default function About() {
    return (
        <>
            <StyledContainer>
                <h1>À propos de moi</h1>
                <div>
                    <TitleStyled>Bio</TitleStyled>
                    <BioStyled>
                        <p className="text">Je m’appelle Ansaka et je suis développeur web design ui/ux avec plus de 2
                            ans d’expérience.</p>
                        <p className="text">Je réalise des sites web et web mobiles en me posant les bonnes questions
                            sur le confort et l’expérience de l'utilisateur, ce qui me permet à la fois de
                            m'expérimenter, découvrir et apprendre de nouvelles technologies.</p>
                        <strong>Ce que je sais faire</strong>
                        <p className="skill">Html, (S)css, Bootstrap, JavaScript, Jquery, React, VueJs, PHP, Symfony, MySQL, GIT</p>
                    </BioStyled>
                </div>
            </StyledContainer>
        </>
    );
}
