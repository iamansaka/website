import styled from "styled-components";
import { device } from "../device";

const StyledContainer = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0 17.8541666667vw;
  @media ${device.lg} {
    padding: 0 8.8541666667vw;
  }
`;

export const ContainerSmallStyled = styled.div`
  max-width: 740px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
export default StyledContainer;
