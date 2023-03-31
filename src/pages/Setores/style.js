import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";
import pistapremium from './legenda/pistapremium.png';
import pistacomum from './legenda/pistacomum.png';
import cadeiraterreo from './legenda/cadeiraterreo.png';
import cadeirasuperior from './legenda/cadeirasuperior.png';
import rampas from './legenda/rampas.png';


export const SetoresSection = styled.section`
.mapa{
  color: ${({theme}) => theme.fontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  img{
    width: 100%;
  }
  .legenda{
    margin-top: 2rem;
    h6{
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
    }
    ul{
      margin-top: 1.5rem;
      li{
        display: flex;
        justify-self: center;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 40px;
        padding: 1rem 0;
                     
        &::before{
          margin-right: 1rem;
        }        
        &:first-child::before{
          content: url(${pistapremium});
        }
        &:nth-child(2)::before{
          content: url(${pistacomum});
        }
        &:nth-child(3)::before{
          content: url(${cadeiraterreo});
        }
        &:nth-child(4)::before{
          content: url(${cadeirasuperior});
        }
        &:last-child::before{
          content: url(${rampas});
        }
      }
    }
  }
}
.detalhes{
  padding: 2rem 1.5rem;
  color: ${({theme}) => theme.fontColor};
  h5{
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
    line-height: 38px;
    padding-bottom: 2rem;
  }
  .cards{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .card{
    text-align: center;
    img{
      width: 100%;
    }
    &:nth-child(2){
      margin-top: 0;
    }
    h6{        
      font-weight: 700;
      font-size: 2rem;
      line-height: 38px;
      padding: 1.5rem 0;
    }
    p{        
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 40px;
    }
  }
}
  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    .mapa{
      padding: 2rem 3.75rem;
      .legenda{
        margin-left: 0;
        padding: 0;
        h6{
          font-size: 2.5rem
        }
        ul{
          li{
            font-size: 2rem
          }
        }
      }
    }
    .detalhes{
      h5{
        font-size: 2.5rem;
        line-height: 47px;
      }
      .card{
        img{
          width: 383px;
          height: 239px;
          object-fit: cover;
          border-radius: 16px;
        }
      }
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}){
    .mapa{
      padding: 2rem;
      flex-direction: row;
      img{
        width: 690px;
        height: 609px;
      }
      .legenda{
        margin-left: 3rem;
      }
    }
  
    .detalhes{
      h5{
        font-size: 3rem;
      }
      .cards{
        max-width: 1800px;
        margin: 0 auto;
        display: flex;  
        flex-direction: row; 
        align-items: flex-start;
        padding: 0 5vw;
        gap: 1.5rem;
      }
      .card{
        &:nth-child(2){
          margin-top: 6.5rem;
        }
      }
    }
  }
`;



