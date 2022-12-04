// Librairie
import React from "react";
import Link from "next/link";
import useHover from "../../../Hook/useHover";

// Styled
import {
  WorkItemStyled,
  WorkItemNumStyled,
  WorkItemWrapper,
  WorkImageStyled,
} from "../../../styles/module/DisplayedWork.styled";

function DisplayedWork() {
  const [hover, isHover] = useHover();

  return (
    <Link href={"/test"}>
      <a>
        <WorkItemStyled ref={hover}>
          <WorkItemNumStyled>01</WorkItemNumStyled>
          <WorkItemWrapper>
            <div>
              <h4 className="title">4 Pattes des poils et 1 coeur</h4>
              <div className="category">↳ Développement web</div>
            </div>
          </WorkItemWrapper>
          <WorkImageStyled ishover={isHover}>
            <div className="item">
              <img
                className="item_image"
                src="https://i.imgur.com/g81wKqp.jpg"
                alt="test"
              />
            </div>
          </WorkImageStyled>
        </WorkItemStyled>
      </a>
    </Link>
  );
}

export default DisplayedWork;
