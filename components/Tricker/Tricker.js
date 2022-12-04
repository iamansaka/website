// Librairie
import React, { useState, useEffect } from "react";
// import useScroll from "../Scroll/Scroll";

// Styled
import {
  TrickerStyled,
  TrickerListStyled,
  TrickerItemStyled,
} from "../../styles/module/Tricker";

function Tricker() {
  // State
  const [scrollPosition, setScrollPosition] = useState();

  // Function
  const onScrollHandler = () => {
    if (window !== "undefined") {
      setScrollPosition(window.pageYOffset);
    }
  };

  // Hook
  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  // Variable
  let scrollY = scrollPosition;

  return (
    <TrickerStyled>
      <TrickerListStyled positionScroll={scrollY}>
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
