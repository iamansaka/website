// Librairie
import React from "react";
import Card from "../../components/Card/Card";

// Styled
import StyledContainer from "../../styles/base/Container.styled";
import { SectionProjetsStyled, GridListStyled } from "../../styles/pages/Projet.styled";

export default function Projets() {
  return (
    <StyledContainer>
      <SectionProjetsStyled>
        <h1>Mes projets</h1>
        <p className="description">
          Lorem ipsum dolor sit amet phasellus mauris lacinia hendrerit elit adipiscing
          augue libero venenatis ornare enim congue lorem habitasse mi si letius eu
          facilisi vivamus facilisis ad vehicula ridiculus odio dui
        </p>
        <GridListStyled>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </GridListStyled>
      </SectionProjetsStyled>
    </StyledContainer>
  );
}
