// Librairie
import React from "react";

// Composant
import DisplayedWork from "./DisplayedWork/DisplayedWork";

// Styled
import {
  SectionWorksDisplay,
  WorksHeaderStyled,
  ProjectGridStyled,
} from "../../styles/module/DisplayedWorks.styled";

export default function DisplayedWorks() {
  return (
    <SectionWorksDisplay>
      <WorksHeaderStyled>
        <p>Mes projets récents</p>
        <h2>Découvrez mes derniers projets sur lesquelles j'ai travaillé</h2>
      </WorksHeaderStyled>
      <div className="projets_wrapper">
        <ProjectGridStyled>
          <DisplayedWork />
          <DisplayedWork />
          <DisplayedWork />
          <DisplayedWork />
        </ProjectGridStyled>
      </div>
    </SectionWorksDisplay>
  );
}
