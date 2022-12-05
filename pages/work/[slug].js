// Librairies
import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

// Component
import Button from "../../components/Button/Button";

// Styled
import StyledContainer, {ContainerSmallStyled} from "../../styles/base/Container.styled";
import {IntroStyled,LinkStyled, ListItemStyled, ThumbnailImageStyled, TitleStyled, WrapperStyled} from "../../styles/pages/ProjetShow.styled";

export default function Projet() {
  const router = useRouter();

  console.log(router);
  console.log("========================");
  console.log(router.route);
  console.log("========================");
  console.log(router.asPath);
  console.log("========================");
  console.log(router.query);
  console.log("========================");

  return (
      <>
        <StyledContainer>
          <IntroStyled>
            <LinkStyled>
              <Link href="/">
                <a><strong>&#8592;</strong>Retour</a>
              </Link>
            </LinkStyled>
            <TitleStyled>4 Pattes des poils et 1 coeur</TitleStyled>
            <ListItemStyled>
              <li><strong>Client</strong><br/>4PP1C</li>
              <li><strong>Catégorie</strong><br/>Développement web</li>
              <li><strong>Date</strong><br/>2021</li>
            </ListItemStyled>
          </IntroStyled>
        </StyledContainer>
        <ThumbnailImageStyled/>
        <StyledContainer>
          <WrapperStyled>
            <h3>A propos du projet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt auctor ante. Integer sodales aliquam interdum. Etiam ut porta augue.
              Nam egestas neque eros, nec sodales massa bibendum ut. Donec vel imperdiet augue, vitae rhoncus mauris.
            </p>
            <p>
              In non eleifend dui, at scelerisque felis. Praesent eros eros, auctor sit amet mollis eu, interdum vitae arcu. Donec gravida sit amet odio eget molestie. Donec consectetur sit amet ligula sed tempus. Fusce dictum nec velit ut tincidunt.
            </p>
            <div>
              <Button url="/">
                Voir le site web
              </Button>
            </div>
          </WrapperStyled>
        </StyledContainer>
      </>
  );
}
