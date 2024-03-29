import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const BotaoIngresso = styled.div`
    background-color: ${({theme}) => theme.fundoBotao};
    padding: 0.5rem 1rem;
    color: ${variaveis.summer.branco};
    box-shadow: 4px 4px 0px ${variaveis.summer.preto};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 40px;
    &:hover{
      background-color: ${({theme}) => theme.hoverBotao};
      cursor: pointer;
    }
    svg{
      scale: 1.5;
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    width: fit-content;
  }

`;



