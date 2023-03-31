import { variaveis } from "./variaveis";
import styled from "styled-components";

export const BotaoTema = styled.button`
  position:absolute;
  top: 1vh;
  left: 10px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  z-index: 10;
  color: ${variaveis.summer.branco};
  svg{
    height: 25px;
    width: 25px;
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}){
    left: 50px;
    top: 2vh;
  }
`