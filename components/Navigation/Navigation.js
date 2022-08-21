// Librairie
import React from "react";
import { navLinks } from "../../lib/config";

// Composant
import Navigationitem from "./NavigationItem/NavigationItem";

// Styled
import { StyledNavigation, StyledNavigationList } from "../../styles/module/Navigation";

export default function Navigation() {
  return (
    <StyledNavigation aria-aria-label="navigation">
      <StyledNavigationList>
        {navLinks.map(({ name, url }, index) => (
          <Navigationitem url={url} key={index}>
            {name}
          </Navigationitem>
        ))}
      </StyledNavigationList>
    </StyledNavigation>
  );
}
