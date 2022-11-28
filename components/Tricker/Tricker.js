// Librairie
import React from "react";

// Styled
import {
  TrickerStyled,
  TrickerListStyled,
  TrickerItemStyled,
} from "../../styles/module/Tricker";

function Tricker() {
  return (
    <TrickerStyled>
      <TrickerListStyled>
        <TrickerItemStyled>Web designer</TrickerItemStyled>
        <TrickerItemStyled>Developpeur fullstack</TrickerItemStyled>
        <TrickerItemStyled>Back-End</TrickerItemStyled>
        <TrickerItemStyled>Front-End</TrickerItemStyled>
        <TrickerItemStyled>Symfony</TrickerItemStyled>
        <TrickerItemStyled>React</TrickerItemStyled>
      </TrickerListStyled>
    </TrickerStyled>
  );
}

export default Tricker;
