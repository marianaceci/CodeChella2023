import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const SobreSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;


  .imagem-sobre {
    background: no-repeat center url(${({ theme }) => theme.images.sobre});
    width: 100%;
    height: 381px;
    margin: 0 auto;
    border-radius: 16px;
    background-size: cover;
  }

  .descricao {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    gap: 1.5rem;
    color: ${({theme}) => theme.fontColor};

    .titulo {
      font-weight: 700;
      font-size: 2rem;
      line-height: 38px;
    }

    .texto {
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 40px;
    }
  }  

  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 3.75rem;
    .descricao {
      .titulo {
        line-height: 38px;
      }
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}) {
    display: grid;
    grid: 1fr / 1fr 1fr;
    gap: 3rem;
    padding: 4rem 7.5rem;
    .imagem-sobre {
      width: 609px;
      height: 381px;
    }
    .descricao {
      margin-top: 0;
      .titulo {
        line-height: 38px;
      }
    }
  }  
`;

export const ImagemRodape = styled.div`
  background-image: url(${({ theme }) => theme.images.bottom});
  width: 100%;
  height: 338px;
  margin: 0;
  background-size: cover;
  background-position: center;
  mix-blend-mode: multiply;
`

