// Librairie
import React from "react";
import Link from "next/link";

import {ProjectItemStyled} from "../../../styles/module/DisplayedWork.styled";

function DisplayedWork() {
  return (
      <div>
          <Link href="/work/4ppc">
              <ProjectItemStyled>
                  <div className="category">Développement</div>
                  <h3>4 Pattes des poils et 1 coeur</h3>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                      luctus venenatis, lectus magna fringilla urna, porttitor.
                  </p>
                  <img src="./images/4ppc.png"/>
              </ProjectItemStyled>
          </Link>
      </div>
  );
}

export default DisplayedWork;
