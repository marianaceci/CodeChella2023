import {variaveis} from "@/styles/variaveis";
import styled from "styled-components";

export const Experience = styled.section`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.fontColor};
  .card{
    text-align: center;
    img{
      width: calc(100% - 3rem);
      margin: 2rem 1.5rem;
      border-radius: 16px;
      object-fit: cover;
      height: 381px;
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
    .card{
      &:nth-child(1){
        img{
          object-position: center -100px;
        }
      }
      img{
        width: calc(100% - 10rem);
        height: 381px;
        margin: 2rem 5rem;
      }
    }
    .texto{
      p{
        padding: 0 7.5rem;
      }
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}){
    .card{
      display: grid;
      grid: 1fr / 52% 48%;
      padding: 4rem 7.5rem 0 7.5rem;
      align-items: center;
      gap: 3rem; 
      max-width: 1600px;
      margin: 0 auto;
      
      img{
        width: 609px;
        margin: 0;
        justify-self: flex-end;
      }
      &:nth-child(1){
        img{
          object-position: inherit;
        }
      }     

      &:nth-child(2){
        grid: 1fr / 48% 52%;
        flex-direction: row-reverse;
        img{
          grid-column: 2;
          grid-row: 1;
          justify-self: flex-start;
        }
        .texto{
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

