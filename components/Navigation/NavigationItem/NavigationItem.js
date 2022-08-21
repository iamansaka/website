// Librairies
import React from "react";
import Link from "next/link";

// Composant
import TextWrapper from "../../TextWrapper/TextWrapper";

// Styled
import { StyledNavigationItem } from "../../../styles/module/Navigation";

function Navigationitem({ children: name, url }) {
  return (
    <StyledNavigationItem>
      <Link href={url}>
        <a>
          <TextWrapper>{name}</TextWrapper>
        </a>
      </Link>
    </StyledNavigationItem>
  );
}

export default Navigationitem;
