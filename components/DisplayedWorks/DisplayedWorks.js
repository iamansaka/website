// Librairie
import React from "react";

// Composant
import DisplayedWork from "./DisplayedWork/DisplayedWork";

// Styled
import {
  SectionWorksDisplay,
  TitleWorksStyled,
} from "../../styles/module/DisplayedWorks.styled";

export default function DisplayedWorks() {
  return (
    <SectionWorksDisplay>
      <TitleWorksStyled>Découvrez mes derniers projets</TitleWorksStyled>
      <ul className="work-items">
        <li>
          <DisplayedWork />
        </li>
        <li>
          <DisplayedWork />
        </li>
      </ul>
    </SectionWorksDisplay>
  );
}
