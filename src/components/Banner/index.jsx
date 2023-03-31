import { BannerSection } from "./style";

export default function Banner({blendmode, titulo, bannerImage}) {

  return (
    <BannerSection>
      <h1>{titulo}</h1>
      <div className="bannerImage" style={{backgroundImage: `url(${bannerImage})`, mixBlendMode: `${blendmode}`}}></div>
    </BannerSection>
  );
} 