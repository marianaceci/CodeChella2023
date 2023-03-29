import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const FormSection = styled.form`
  color: ${({theme}) => theme.fontColor};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
  padding: 2rem 1.5rem;
  .divisaoCampos {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  label {
    font-weight: 700;
    font-size: 2rem;
    line-height: 38px;
  }
  input {
    box-sizing: border-box;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 0.5rem;
    width: 100%;
  }
  .campo {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .dropdownSelect {
      border: none;
      outline: none;
      font-weight: 400;
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }
  button {
    width: fit-content;
    svg {
      scale: 1.5;
    }
  }
  .buyTicket {
    background-color: ${({theme}) => theme.fundoBotao};
    border: 1px solid ${({theme}) => theme.fundoBotao};
    padding: 0.5rem 1rem;
    color: ${variaveis.summer.branco};
    box-shadow: 4px 4px 0px ${variaveis.summer.preto};
    border-radius: 1rem;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 40px;
    margin: 0 auto;
    text-decoration: none;
    img {
      margin-left: 1rem;
    }
  }
  .mensagemErro {
    color: red;
  }

  a {
    text-decoration: none;
  }
  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    padding: 0 5rem;
    .campo {
      .dropdownSelect {
        flex-direction: column;
        width: 100%;
      }
    }
    .mensagemErro {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}) {
    padding: 3rem 20rem;

    .divisaoCampos {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .campo {
        width: 45%;
      }
    }
    .buyTicket {
      &:hover {
        background-color: $hover;
        cursor: pointer;
      }
    }
  }
`;
