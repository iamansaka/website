// Librairie
import React, { useState } from "react";
import { findAll } from "../../services/ProjectsApi";

// Component
import Card from "../../components/Card/Card";

// Styled
import StyledContainer from "../../styles/base/Container.styled";
import { SectionProjetsStyled, GridListStyled } from "../../styles/pages/Projet.styled";

export default function Projets({ projets }) {
  let projetsList = projets.data.map((projet) => (
    <Card key={projet.id} {...projet.attributes} />
  ));

  return (
    <StyledContainer>
      <SectionProjetsStyled>
        <h1>Mes projets</h1>
        <p className="description">
          Lorem ipsum dolor sit amet phasellus mauris lacinia hendrerit elit adipiscing
          augue libero venenatis ornare enim congue lorem habitasse mi si letius eu
          facilisi vivamus facilisis ad vehicula ridiculus odio dui
        </p>
        <GridListStyled>{projetsList}</GridListStyled>
      </SectionProjetsStyled>
    </StyledContainer>
  );
}

export async function getServerSideProps() {
  const projets = await findAll();

  return {
    props: {
      projets: projets,
    },
  };
}
