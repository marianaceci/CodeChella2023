import Banner from "@/components/Banner";
import Form from "./Form";
import { IngressoSection } from "./style";
import bannerImage from '/banners/ingresso-banner.png';

export default function IngressoForm() {
  return (
    <>
      <Banner
        blendmode='multiply'
        titulo='Garanta seu ingresso'
        bannerImage={bannerImage}
      />
      <IngressoSection>
        <h3>Preencha o formulário a seguir:</h3>
        <Form />
      </IngressoSection>
    </>
  );
}
