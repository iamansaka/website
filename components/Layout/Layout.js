// Librairie
import React from "react";

// Composants
import Header from "../Header/Header";
import Noise from "../Noise/Noise";

// Styled
import GlobalStyle from "../../styles/globalStyles";

export default function Layout({ children }) {
  return (
    <>
      <Noise />
      <Header />
      <GlobalStyle />
      {children}
    </>
  );
}
