import { createGlobalStyle } from "styled-components";
import {variaveis} from "@/styles/variaveis";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body{
    font-family: ${variaveis.fontFamily.principal};
  }

  li{
    list-style: none;  
  }
  
  a {
    text-decoration: none;
  }
`;




