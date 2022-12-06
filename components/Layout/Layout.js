// Librairie
import React from "react";

// Composants
import Header from "../Header/Header";
import Noise from "../Noise/Noise";
import Footer from "../Footer/Footer";

// Styled
import GlobalStyle from "../../styles/globalStyles";
import LayoutStyled from "../../styles/base/Layout.styled";

export default function Layout({ children }) {
  return (
      <>
          <Noise/>
          <GlobalStyle/>
          <LayoutStyled>
              <Header/>
              <main className="main_content">
                  {children}
              </main>
              <Footer/>
          </LayoutStyled>
      </>
  );
}
