import React from "react";

// Composant
import Button from "../../Button/Button";

// Styled
import {
  CardStyled,
  CardHeaderStyled,
  ColStyled,
  WorkTitleStyled,
  WorkThumbnailStyled,
} from "../../../styles/module/DisplayedWork.styled";

function DisplayedWork() {
  return (
    <CardStyled>
      <CardHeaderStyled>
        <ColStyled span="auto / span 1">(01)</ColStyled>
        <ColStyled span="auto / span 4" gap="0.313rem">
          <WorkTitleStyled>4 Pattes Des Poils Et 1 Coeur</WorkTitleStyled>
          <p>2022 | Développement web</p>
        </ColStyled>
        <ColStyled span="auto / span 4" gap="1.125rem">
          <p className="works_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            amet luctus venenatis, lectus magna fringilla urna, porttitor.
          </p>
          <Button url="/">En savoir plus</Button>
        </ColStyled>
        <ColStyled span="auto / span 3">
          <ul className="works_techno">
            <li>Symfony</li>
            <li>html/css</li>
            <li>JavaScript</li>
            <li>Figma</li>
            <li>PHP</li>
          </ul>
        </ColStyled>
      </CardHeaderStyled>
      {/* <WorkThumbnailStyled>
        <img src="../images/projects/shot.png" />
      </WorkThumbnailStyled> */}
    </CardStyled>
  );
}

export default DisplayedWork;
