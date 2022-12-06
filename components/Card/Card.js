// Librairie
import React from "react";
import Link from "next/link";
import { navLinks } from "../../lib/config";

// Styled
import { CardStyled, CardLinkStyled } from "../../styles/module/Card.styled";

export default function Card() {
  return (
    <CardStyled>
      <div className="thumbnail">
        <img src="./images/4ppc.png" alt="Titre" />
      </div>
      <h3>Project Name</h3>
      <p>
        Lorem ipsum dolor sit amet nulla ac integer curabitur class pulvinar in sapien
        urna mauris finibus semper posuere phasellus enim
      </p>
      <Link href={`${navLinks[1].url}/4ppc`} passHref legacyBehavior>
        <CardLinkStyled>Voir le projet</CardLinkStyled>
      </Link>
    </CardStyled>
  );
}
