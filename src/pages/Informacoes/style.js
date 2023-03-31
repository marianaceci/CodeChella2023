import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const InfoSection = styled.section`
color: ${({theme}) => theme.fontColor};
.titulo{
  font-family: ${variaveis.fontFamily.secundaria};
  font-weight: 400;
  font-size: 2rem;
  line-height: 42px;
  text-align: center;
  padding: 3rem 1.5rem;
}
.cards{
  padding: 0 1.5rem;
  button{
    text-align: start;
    border: none;
    background-color: ${({theme}) => theme.header};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${variaveis.summer.branco};
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 38px;
    padding: 1rem;
    width: 100%;
    margin-top: 0.5rem;       
    h6{
      width: 90%;
    } 
  }
  p{
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 40px;
    background: ${variaveis.summer.azulClaro};
    color: ${variaveis.summer.preto};
    padding: 1rem;
  }
}

  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    .titulo{      
      font-size: 3rem;
      line-height: 62px;
    }
    .cards{
      padding: 0 3.75rem 3rem 3.75rem;
      button{
        font-size: 2rem;
      }
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}) {
    .cards{
      padding: 0 13rem 3rem 13rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;



