import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  font-size: 1.2rem;
  padding: 1.25rem 0;
  border-top: 1px solid #eee;

  ul {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
  }
`;
