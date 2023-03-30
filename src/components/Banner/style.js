import styled from "styled-components";
import { variaveis } from "@/styles/variaveis";

export const BannerSection = styled.div`
  position: relative;
  h1{
    color: ${({theme}) => theme.fontColor};
    position: absolute;
    width: 100%;
    text-align: center;
    z-index: 5;
    top: 40%;
    right: 0;    
    font-family: ${variaveis.fontFamily.secundaria};
    font-weight: 400;    
    font-size: 2rem;
    line-height: 42px;
    
  }
  .bannerImage{
    height: 270px; 
    width: 100%;    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (min-width: ${variaveis.breakpoints.tablet}) {
    h1{      
      font-size: 4rem;
      line-height: 83px;
    }
    .bannerImage{
      height: 384px;
    }
  }

  @media screen and (min-width: ${variaveis.breakpoints.desktop}) {
    .bannerImage{
      height: 407px;
    }
  }
`;



