import { BannerSection } from "./style";
import { bannerInfo } from "@/data/bannerInfo";
import { useTheme } from "styled-components";

export default function Banner({blendmode}) {
  const theme = useTheme();
  const bannerTheme = theme.images.banner;

  const originalPath = window.location.href;
  const path = originalPath.slice(22);
  //const isMain = path === '';
  const bannerSelected = bannerInfo.filter((item) => item.pagina === path);
  const isTitulo = bannerSelected[0]?.titulo === undefined;
  const isImageBanner = bannerSelected[0]?.src === undefined;

  const tituloMain = isTitulo ? "Boas-vindas ao #CodeChella2023!" : bannerSelected[0]?.titulo;
  const imageBanner = isImageBanner ? bannerTheme : bannerSelected[0]?.src;
  

  return (
    <BannerSection>
      <h1>{tituloMain}</h1>
      <div className="bannerImage" style={{backgroundImage: `url(${imageBanner})`, mixBlendMode: `${blendmode}`}}></div>
    </BannerSection>
  );
} 