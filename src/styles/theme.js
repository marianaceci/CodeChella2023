import { variaveis } from "./variaveis";
import styled from "styled-components";

export const borealTheme = () => ({
  header: variaveis.boreal.azulEscuro,
  fontColor: variaveis.boreal.branco,
  fundoBotao: variaveis.boreal.azulEscuro,
  hoverBotao: variaveis.boreal.hover,
  fundoData: variaveis.boreal.verdeEscuro,
  gradientePagina: variaveis.boreal.gradiente,
  footer: variaveis.boreal.azulEscuro,
  logo: 'logo-white.svg',
  logoFav: '/fav-white.svg',
  images: {
    banner: '/banners/boreal-home-banner.png',
    sobre: '/Home/boreal-home-sobre.png',
    bottom: '/Home/boreal-home-bottom.png'
  },
  logo: '/logo-white.svg',
  fav: '/fav-white.svg'
});

export const summerTheme = () => ({
  header: variaveis.summer.azulEscuro,
  fontColor: variaveis.summer.cinza,
  fundoBotao: variaveis.summer.azulEscuro,
  hoverBotao: variaveis.summer.hover,
  fundoData: variaveis.summer.mostarda,
  gradientePagina: variaveis.summer.gradiente,
  footer: variaveis.summer.amarelo,
  logo: 'logo-grey.svg',
  logoFav: '/fav-white.svg',
  images: {
    banner: '/banners/summer-home-banner.png',
    sobre: '/Home/summer-home-sobre.png',
    bottom: '/Home/summer-home-bottom.png'
  },
  logo: '/logo-grey.svg',
  fav: '/fav-grey.svg'
});

export const BotaoTema = styled.button`
  position:absolute;
  top: 1vh;
  left: 10px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  z-index: 10;
  color: ${variaveis.summer.branco};
  svg{
    height: 25px;
    width: 25px;
  }
`