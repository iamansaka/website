// Librairie
import React from "react";
import Link from "next/link";

// Styled
import { WorksItemStyled } from "../../../styles/module/DisplayedWork.styled";

function DisplayedWork() {
  return (
    <Link href={"/test"}>
      <a>
        <WorksItemStyled>
          <div>
            <div>
              <h4>Danews</h4>
              <p>2022 | Design ui/Ux & Intégration web</p>
            </div>
          </div>
        </WorksItemStyled>
      </a>
    </Link>
  );
}

export default DisplayedWork;
