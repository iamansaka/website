import React from "react";
import GlobalStyle from "../../styles/globalStyles";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      {children}
    </>
  );
}
