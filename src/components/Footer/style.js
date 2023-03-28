import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const FooterSection = styled.footer`
  background-color: ${variaveis.summer.amarelo};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  line-height: 40px;
  font-size: 1.25rem;
  flex-direction: column; 
  padding: 1.5rem;

  .redes {   

    .icons{
      display: flex;
      align-items: center;
      flex-direction: column;  
      svg{
        color: ${variaveis.summer.cinza};
      }
      ul{
        display: flex;
        align-items: center;
        *{
          margin-left: 0.75rem;
        }      
      } 
    }
  }

  .autor{
    text-align: center;   
    margin-top: 2rem;    
  }
}

  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    line-height: 40px;
    font-size: 1.25rem;
    flex-direction: column;    
    padding: 1.5rem 0;
  
    .redes {
      text-align: center;      
  
      .icons{
        display: flex;
        flex-direction: row;
        align-items: center;
        ul{
          display: flex;
          align-items: center;
          *{
            margin-left: 0.75rem;
          }      
        } 
      }
    }
  
    .autor{
      display: flex;
      margin-top: 2rem;
      gap: 5px;
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}) {
    padding: 3.75rem 7.5rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    line-height: 40px;
    font-size: 1.25rem;
  
    .redes {      
      text-align: start;
      .icons{
        ul{
          display: flex;
          align-items: center;
          *{
            margin-left: 0.75rem;
          }      
        } 
      }
    }

    .autor{
      flex-direction: column;
      text-align: start;
    }
  }
`;



