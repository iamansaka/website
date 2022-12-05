// Librairie
import React from "react";

import { ProjectItemStyled } from "../../../styles/module/DisplayedWork.styled";
import Button from "../../Button/Button";

function DisplayedWork() {
  return (
    <ProjectItemStyled>
      <div className="category">Développement</div>
      <h3>4 Pattes des poils et 1 coeur</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
        luctus venenatis, lectus magna fringilla urna, porttitor.
      </p>
      <img src="https://i.imgur.com/wkJhQQE.png" />
    </ProjectItemStyled>
  );
}

export default DisplayedWork;
