import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const HeaderNav = styled.nav`
  display: flex;
  padding: 2rem 1.5rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    flex-direction: column;
    height: fit-content;    
    padding: 2rem 3.75rem;
    gap: 2rem;
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}) {
    flex-direction: row;
    padding: 2rem 7.5rem;
    .logo:hover{
      transform: scale(1.2);
      transition: all .5s ease-in-out ;
    }
  }
`;

export const HeaderContainer = styled.div`
  background-color: ${({theme}) => theme.header};
`



