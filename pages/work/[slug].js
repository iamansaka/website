import React from "react";
import { useRouter } from "next/router";
import StyledContainer from "../../styles/base/Container.styled";

export default function Projet() {
  const router = useRouter();

  console.log(router);
  console.log("========================");
  console.log(router.route);
  console.log("========================");
  console.log(router.asPath);
  console.log("========================");
  console.log(router.query);
  console.log("========================");

  return (
    <>
      <StyledContainer>
        <a>Retour</a>
        <h1>Projet 1</h1>
      </StyledContainer>
    </>
  );
}
