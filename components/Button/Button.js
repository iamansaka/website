// Librairies
import React from "react";
import Link from "next/link";

// Styled
import {StyledButton} from "../../styles/module/Button.styled";

function Button({ children, url }) {
  return (
      <StyledButton>
          <Link href={url}>
              <a className="button_link">
                  <div className="button_outline"></div>
                  <div className="button_text">{children}</div>
                  <img src="/images/arrow.svg" alt="icon fleche"/>
              </a>
          </Link>
      </StyledButton>
  );
}

export default Button;
