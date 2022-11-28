import React from "react";

// Composant
import DisplayedWork from "./DisplayedWork/DisplayedWork";

// Styled
import {
  SectionWorksStyled,
  WorksheadStyled,
} from "../../styles/module/DisplayedWorks.styled";

export default function DisplayedWorks() {
  return (
    <SectionWorksStyled>
      <WorksheadStyled>
        <h2>Les derniers projets</h2>
      </WorksheadStyled>
      <div>
        <DisplayedWork />
        <DisplayedWork />
        <DisplayedWork />
      </div>
    </SectionWorksStyled>
  );
}
