import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return <CustomCursorStyled ref={cursorRef}></CustomCursorStyled>;
}

const CustomCursorStyled = styled.div`
  position: fixed;
  height: 50px;
  width: 50px;
  /* border: 1px solid var(--dark); */
  background-color: #000;
  border-radius: 50%;
  transform: translate3d(0, 0, 0);
  pointer-events: none;
  mix-blend-mode: difference;
  overflow: hidden;
  z-index: 999;
`;

export default CustomCursor;
