// Librairie
import React from "react";
import Link from "next/link";

// Styled
import {
  ProjectItemStyled,
  ProjectThumbnailStyled,
  ProjectContentStyled,
  ProjectBodyStyled,
  ProjectLinkStyled,
} from "../../../styles/module/DisplayedWork.styled";

function DisplayedWork() {
  return (
    <ProjectItemStyled>
      <ProjectThumbnailStyled>
        <Link href="/">
          <a>
            <div className="thumbnail_img">
              <img src="./images/4ppc.png" />
            </div>
          </a>
        </Link>
      </ProjectThumbnailStyled>
      <ProjectBodyStyled>
        <ProjectContentStyled>
          <div className="category">Développement web</div>
          <Link href="/">
            <a>
              <h3>4 Pattes des poils et 1 coeur</h3>
            </a>
          </Link>
          <p>
            Lorem ipsum dolor sit amet sociosqu mauris quam suspendisse mollis rhoncus
            facilisis ridiculus letius himenaeos maecenas eget lacus aptent nisi
          </p>
          <div className="technologie">Symfony, Html/css, JavaScript</div>
        </ProjectContentStyled>
        <Link href="" passHref legacyBehavior>
          <ProjectLinkStyled>Voir le projet ↗</ProjectLinkStyled>
        </Link>
      </ProjectBodyStyled>
    </ProjectItemStyled>
  );
}

export default DisplayedWork;
