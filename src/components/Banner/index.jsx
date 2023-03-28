import { BannerSection } from './style';
import { variaveis } from "@/styles/variaveis";

export default function Banner({titulo, srcTablet, srcDesktop, srcMobile, alt}) {
  return (
    <BannerSection>
      <h1>{titulo}</h1>
      <picture>
        <source
          media={`(min-width: ${variaveis.breakpoints.desktop})`}
          srcSet={`${srcDesktop} 1440w`}
          sizes={`${variaveis.breakpoints.desktop}`}        
        />
        <source
          media={`(min-width: ${variaveis.breakpoints.tablet})`}
          srcSet={`${srcTablet} 768w`}
          sizes={`${variaveis.breakpoints.tablet}`}        
        />
        <img
          src={srcMobile}
          alt={alt}      
        />
      </picture>
        
    </BannerSection>
  )
}