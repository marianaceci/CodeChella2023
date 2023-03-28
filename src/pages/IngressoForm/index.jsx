import Banner from "../../components/Banner";
import Form from "./Form";
import { IngressoSection } from "./style";
import bannerDesktop from "/Ingresso/ingresso-banner_g.png";
import bannerTablet from "/Ingresso/ingresso-banner_m.png";
import bannerMobile from "/Ingresso/ingresso-banner_s.png";

export default function IngressoForm() {
  return (
    <>
      <Banner
        srcMobile={bannerMobile}
        alt="pessoas dançando e comemorando"
        srcTablet={bannerTablet}
        srcDesktop={bannerDesktop}
        titulo="Garanta seu Ingresso"
      />
      <IngressoSection>
        <h3>Preencha o formulário a seguir:</h3>
        <Form />
      </IngressoSection>
    </>
  );
}
