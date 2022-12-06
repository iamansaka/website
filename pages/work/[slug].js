// Librairies
import React from "react";
import Link from "next/link";

// Component
import Button from "../../components/Button/Button";

// Styled
import StyledContainer from "../../styles/base/Container.styled";
import {
  IntroStyled,
  LinkStyled,
  ListItemStyled,
  ThumbnailImageStyled,
  TitleStyled,
  WrapperStyled,
} from "../../styles/pages/ProjetShow.styled";
import { findOne } from "../../services/ProjectsApi";

export default function Projet({ projet }) {
  let date = new Date(projet.date).getFullYear();

  return (
    <>
      <StyledContainer>
        <IntroStyled>
          <LinkStyled>
            <Link href="/">
              <a>
                <strong>&#8592;</strong>Retour
              </a>
            </Link>
          </LinkStyled>
          <TitleStyled>{projet.title}</TitleStyled>
          <ListItemStyled>
            <li>
              <strong>Client</strong>
              <br />
              {projet.customer}
            </li>
            <li>
              <strong>Catégorie</strong>
              <br />
              {projet.category}
            </li>
            <li>
              <strong>Date</strong>
              <br />
              {date}
            </li>
          </ListItemStyled>
        </IntroStyled>
      </StyledContainer>
      <ThumbnailImageStyled />
      <StyledContainer>
        <WrapperStyled>
          <h3>A propos du projet</h3>
          <p>{projet.description}</p>
          <p>{projet.content}</p>
          <div>{projet.link_web ? <Button url="/">Voir le site web</Button> : ""}</div>
        </WrapperStyled>
      </StyledContainer>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const projet = await findOne(slug);

  return {
    props: {
      projet: projet.data.attributes,
    },
  };
}
