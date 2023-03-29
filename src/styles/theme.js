import {variaveis} from "./variaveis";
import { BsInstagram, BsTwitch, BsTwitter, BsWhatsapp } from "react-icons/bs";

export const borealTheme = () => ({
  header: variaveis.boreal.azulEscuro,
  fontColor: variaveis.boreal.branco,
  fundoBotao: variaveis.boreal.azulEscuro,
  hoverBotao: variaveis.boreal.hover,
  fundoData: variaveis.boreal.verdeEscuro,
  gradientePagina: variaveis.boreal.gradiente,
  footer: variaveis.boreal.azulEscuro,
  images: {
    banner: '/Home/borealHomeBanner-s.png',
    sobre: '/Home/borealHomeSobre-s.png',
    bottom: '/Home/borealHomeBottom-s.png',
  },
  logo: 'logo-white.svg',
  logoFav: '/fav-white.svg'
  // icons: {
  //   whatsapp: <BsWhatsapp color={variaveis.boreal.branco}/>,
  //   twitch: <BsTwitch color={variaveis.boreal.branco}/>,
  //   instagram: <BsInstagram color={variaveis.boreal.branco}/>,
  //   twitter: <BsTwitter color={variaveis.boreal.branco}/>,
  // }
});

export const summerTheme = () => ({
  header: variaveis.summer.azulEscuro,
  fontColor: variaveis.summer.cinza,
  fundoBotao: variaveis.summer.azulEscuro,
  hoverBotao: variaveis.summer.hover,
  fundoData: variaveis.summer.mostarda,
  gradientePagina: variaveis.summer.gradiente,
  footer: variaveis.summer.amarelo,
  images: {
    banner: '/Home/home-banner_s.png',
    sobre: '/Home/sobre_s.png',
    bottom: '/Home/bottom_s.png',
  },
  logo: 'logo-grey.svg',
  logoFav: '/fav-white.svg'
  // icons: {
  //   whatsapp: <BsWhatsapp color={variaveis.summer.cinza}/>,
  //   twitch: <BsTwitch color={variaveis.summer.cinza}/>,
  //   instagram: <BsInstagram color={variaveis.summer.cinza}/>,
  //   twitter:<BsTwitter color={variaveis.summer.cinza}/>, 
  // }
})