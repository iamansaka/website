// Librairies
import React from "react";
import Link from "next/link";

// Styled
import { StyledButton } from "../../styles/module/Button.styled";

function Button({ children, url }) {
  return (
    <Link href={url}>
      <StyledButton>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-down-right"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="7" y1="7" x2="17" y2="17" />
            <polyline points="17 8 17 17 8 17" />
          </svg>
        </span>
        {children}
      </StyledButton>
    </Link>
  );
}

export default Button;
