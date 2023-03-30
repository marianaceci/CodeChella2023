import { BannerSection } from "./style";
import { bannerInfo } from "@/data/bannerInfo";
import { useTheme } from "styled-components";

export default function Banner({blendmode}) {
  const theme = useTheme();
  const bannerTheme = theme.images.banner;

  const originalPath = window.location.href;
  const path = originalPath.slice(22);
  const isMain = path === '';

  const bannerSelected = bannerInfo.filter((item) => item.pagina === path);
  const imageBanner = isMain ? bannerTheme : bannerSelected[0].src;

  return (
    <BannerSection>
      <h1>{bannerSelected[0].titulo}</h1>
      <div className="bannerImage" style={{backgroundImage: `url(${imageBanner})`, mixBlendMode: `${blendmode}`}}></div>
    </BannerSection>
  );
} 