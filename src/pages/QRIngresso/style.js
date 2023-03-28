import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const QRCodeSection = styled.section`
  padding: 4rem 1.5rem;
  color: ${variaveis.summer.cinza};
  .titulo {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }

  .card {
    padding: 2rem;
    background: linear-gradient(180deg, #bfdae6 0%, #fcf0dd 50%, #facf9d 100%);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
    .logos {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .info {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      .text {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 40px;
        h6 {
          font-weight: 700;
          font-size: 2rem;
          line-height: 38px;
          margin: 1.5rem auto;
        }
      }
    }
  }
  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    padding: 4rem 3.75rem;
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}) {
    padding: 2rem 20rem;
    .card {
      .info {
        gap: 3rem;
        flex-direction: row;
        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          h6 {
            margin: 0;
            padding-bottom: 1.5rem;
          }
        }
      }
    }
  }
`;
