import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLogo = styled.a`
  display: block;
  font-size: 1.3rem;
  cursor: pointer;
`;

export default function Logo({ children, url }) {
  return (
    <Link href={url}>
      <StyledLogo>{children}</StyledLogo>
    </Link>
  );
}
