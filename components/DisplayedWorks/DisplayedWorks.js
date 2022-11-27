import React from "react";

// Composant
import DisplayedWork from "./DisplayedWork/DisplayedWork";

// Styled
import { WorksheadStyled } from "../../styles/module/DisplayedWorks.styled";

export default function DisplayedWorks() {
  return (
    <section>
      <WorksheadStyled>
        <h2>Découvrez mes derniers projets</h2>
      </WorksheadStyled>
      <div>
        <DisplayedWork />
        <DisplayedWork />
        <DisplayedWork />
      </div>
    </section>
  );
}
