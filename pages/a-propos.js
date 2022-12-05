// Librairie
import React from "react";
import Link from "next/link";
import { navLinks } from "../lib/config";

// Styled
import StyledContainer from "../styles/base/Container.styled";
import {
  IntroStyled,
  TitleStyled,
  TitleSecondaryStyled,
  SkillStyled,
  CodepenStyled,
  ContactStyled,
} from "../styles/pages/A-propos.styled";

export default function About() {
  return (
    <>
      <StyledContainer>
        <TitleStyled>À propos de moi</TitleStyled>
        <IntroStyled>
          <TitleSecondaryStyled>Bio</TitleSecondaryStyled>
          <p>
            Je m’appelle Ansaka et je suis développeur web design ui/ux avec plus de 2 ans
            d’expérience.
          </p>
          <p>
            Je réalise des sites web et web mobiles en me posant les bonnes questions sur
            le confort et l’expérience de l'utilisateur, ce qui me permet à la fois de
            m'expérimenter, découvrir et apprendre de nouvelles technologies.
          </p>
          <strong>Ce que je sais faire</strong>
          <SkillStyled>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>PHP</li>
            <li>Symfony</li>
            <li>MySQL</li>
            <li>GIT</li>
          </SkillStyled>
        </IntroStyled>
        <CodepenStyled>
          <TitleSecondaryStyled>Codepen</TitleSecondaryStyled>
          <p>
            Quand je n'ai pas de projet dans la poche, je joue avec le css en réalisent
            des petites créations sur{" "}
            <a className="link_codepen" href="codepen.com/anss">
              Codepen.
            </a>
          </p>
        </CodepenStyled>
        <Link href={navLinks[3].url} passHref legacyBehavior>
          <ContactStyled>Une collaboration ? Un projet ?</ContactStyled>
        </Link>
      </StyledContainer>
    </>
  );
}
