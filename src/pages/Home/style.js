import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const SobreSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;


  .picture img {
    display: block;
    width: 100%;
  }

  .descricao {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    gap: 1.5rem;
    color: ${variaveis.summer.cinza};

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
    flex-direction: row;
    gap: 3rem;
    padding: 4rem 7.5rem;
    .picture img {
      width: auto;
    }
    .descricao {
      margin-top: 0;
      .titulo {
        line-height: 38px;
      }
    }
  }
`;

export const ImgRodape = styled.picture`
  img {
    isplay: block;
    width: 100%;
  }
`;
