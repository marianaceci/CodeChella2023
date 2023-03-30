import Banner from "../../components/Banner";
import Form from "./Form";
import { IngressoSection } from "./style";

export default function IngressoForm() {
  return (
    <>
      <Banner blendmode='multiply'/>
      <IngressoSection>
        <h3>Preencha o formulário a seguir:</h3>
        <Form />
      </IngressoSection>
    </>
  );
}
