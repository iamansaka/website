// Librairie
import React from "react";
import Link from "next/link";
import { navLinks } from "../../lib/config";

// Styled
import { CardStyled, CardLinkStyled } from "../../styles/module/Card.styled";

export default function Card(props) {
  console.log(props);
  return (
    <CardStyled>
      <div className="thumbnail">
        <img src="./images/4ppc.png" alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description ? props.description : "Pas de description pour le môment"}</p>
      <Link href={`${navLinks[1].url}/${props.slug}`} passHref legacyBehavior>
        <CardLinkStyled>Voir le projet</CardLinkStyled>
      </Link>
    </CardStyled>
  );
}
