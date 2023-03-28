import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const IngressoSection = styled.section`
  h3 {
    text-align: center;
    font-family: ${variaveis.fontFamily.secundaria};
    font-weight: 400;
    font-size: 2rem;
    line-height: 42px;
    color: ${variaveis.summer.cinza};
    padding: 2rem 1.5rem;
  }
  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    h3 {
      font-size: 3rem;
      line-height: 62px;
      padding: 3rem 3.5rem;
    }
  }
`;
