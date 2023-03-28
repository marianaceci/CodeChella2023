import {variaveis} from "@/styles/variaveis";
import styled from "styled-components";

export const Experience = styled.section`
  display: flex;
  flex-direction: column;
  .card{
    text-align: center;
    picture img{
      flex: none;
      padding: 2rem 1.5rem;
    }
  }    
  
  .texto{
    h6{
      font-weight: 700;
      font-size: 2rem;
      line-height: 38px;
    }
    p{
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 40px;
      margin-bottom: 2rem;
      padding: 0 1.5rem;
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.tablet}){
    .texto{
      p{
        padding: 0 7.5rem;
      }
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}){
    .card{
      display: flex;
      flex-direction: row;
      padding: 4rem 7.5rem 0 7.5rem;
      align-items: center;
      gap: 3rem; 

      &:nth-child(2){
        display: flex;
        flex-direction: row-reverse;
        h6, p{
          text-align: right;
        }
      }
    }

    .texto {
      text-align: start;
      p {
        margin-top: 1.5rem;
        padding: 0;
      }
    }   
  }
`

