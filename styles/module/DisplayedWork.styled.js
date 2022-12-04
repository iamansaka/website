import styled from "styled-components";

export const WorkItemStyled = styled.div`
  position: relative;
  padding: 2.625rem 0;
  display: flex;
  flex-flow: row;
  gap: 10px;
  border-bottom: 1px solid #eee;
`;

export const WorkItemNumStyled = styled.div`
  margin-right: 30px;
  font-size: 0.9rem;
  &::before {
    content: "( ";
  }
  &::after {
    content: " )";
  }
`;

export const WorkItemWrapper = styled.div`
  .title {
    text-transform: uppercase;
    font-size: 30px;
  }
  .category {
    font-size: 1.188rem;
  }
  ${WorkItemStyled}:hover & {
    opacity: 0.6;
    color: var(--blue);
  }
`;

export const WorkImageStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  visibility: ${(props) => (props.ishover ? "visible" : "hidden")};
  opacity: ${(props) => (props.ishover ? "1" : "0")};
  z-index: 999;
  &:hover + ${WorkItemWrapper} {
    filter: blur(8px) opacity(20%);
    transition: all 0.2s ease;
  }

  .item {
    position: relative;
    display: block;
    left: 0px;
    top: 0px;
    transform-origin: 50% 50%;
  }

  .item_image {
    max-width: 30vw;
    width: 100%;
    height: auto;
    vertical-align: middle;
    object-fit: contain;
  }
`;
