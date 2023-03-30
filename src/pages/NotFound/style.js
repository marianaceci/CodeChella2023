import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const NotFoundStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 10vh 0;
  color: ${({theme}) => theme.fontColor};
  .number span{
    font-family: ${variaveis.fontFamily.secundaria};
    font-size: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.fontColor};
  }
  .text{
    display: grid;
    grid: 1fr 1fr / 1fr;
    gap: 15px;
    text-align: center;
    padding-top: 10vh;
    span {
      font-size: 3rem;
      font-weight: 600;
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    height: calc(100vh - 237px - 203px);
    .number span{
      font-size: 10rem;
    }
    .text {
      padding-top: 7vh;
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}){
    height: calc(100vh - 237px - 131px);
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15vh 0;
    .number span{
      border-right: 3px solid ${({ theme }) => theme.fontColor};
      border-bottom: none;
      padding-right: 4vw;
      font-size: 10rem;
    }
    .text{
      display: grid;
      grid: auto 1fr / 1fr;
      padding-left: 4vw;
      gap: 20px;
      padding-top: 0;
    }
  }
`