import styled from "styled-components";

export const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 3.75rem;
  /* height: 576px; */
  padding: 1.875rem 0;
  border-bottom: 1px solid var(--dark);
`;

export const CardHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.5rem;
`;

export const ColStyled = styled.div`
  grid-column: ${({ span }) => `${span || "span 1/ span 12"}`};
  grid-auto-rows: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => `${gap || "1rem"}`};

  .works_text {
    width: 65%;
  }

  .works_techno {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0.24rem;

    li::before {
      content: "#";
      margin-right: 3px;
    }
  }
`;

export const WorkTitleStyled = styled.h3`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 200;
  font-family: "Morganite", -apple-system, "Open Sans", sans-serif;
`;

export const WorkThumbnailStyled = styled.div`
  background-color: red;
  height: 500px;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top 20% center;
    vertical-align: middle;
    /* transition: all 4s ease;
    &:hover {
      object-position: bottom center;
    } */
  }
`;
