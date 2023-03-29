import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const LineupSection = styled.section`
  color: ${({theme}) => theme.fontColor};
  .header {
    font-size: 3rem;
    line-height: 62px;
    font-family: ${variaveis.fontFamily.secundaria};
    font-weight: 400;
    text-align: center;
    margin: 2rem auto;
  }

  .programa {
    .data {
      display: flex;
      align-items: center;
      font-size: 2rem;
      hr {
        display: none;
      }
      h3 {
        line-height: 42px;
        background-color: ${({theme}) => theme.fundoData};
        color: ${variaveis.summer.branco};
        font-family: "Calistoga", cursive;
        font-size: 2rem;
        padding: 1rem;
        text-align: center;
        text-transform: uppercase;
        margin: 3rem auto 0 auto;
      }
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    .header {
      font-size: 4rem;
      line-height: 83px;
    }
    .programa {
      .data {
        padding-top: 3rem;
        hr {
          display: inline-block;
          border-color: ${({theme}) => theme.fundoData};
          width: 15%;
          margin: 0 auto;
        }
        h3 {
          font-size: 3rem;
          line-height: 62px;
          margin-top: 0;
        }
      }
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    hr {
      width: 25%;
    }
  }
`;

export const Banda = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;
  text-align: center;
  row-gap: 2rem;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 2rem;
      padding-right: 4.75rem;
      padding-left: 4.75rem;
    }
  }

  .estilo__banda1 {
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.625rem;
  }
  .estilo__banda2 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
  }
  .estilo__banda3 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.375rem;
  }
  .estilo__banda4 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.375rem;
  }
`;
