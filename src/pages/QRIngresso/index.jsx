import Banner from "../../components/Banner";
import { useState } from "react";
import code from "./qr-code.png";
import { QRCodeSection } from "./style";
import { useTheme } from "styled-components";

export default function QRIngresso() {
  const [nome, setNome] = useState(() => {
    const nomeSalvo = localStorage.getItem("nome");
    return nomeSalvo;
  });

  const [tipo, setTipo] = useState(() => {
    const tipoSalvo = localStorage.getItem("tipo");
    return tipoSalvo;
  });

  const [setor, setSetor] = useState(() => {
    const setorSalvo = localStorage.getItem("setor");
    return setorSalvo;
  });

  const [data, setData] = useState(() => {
    const dataSalvo = localStorage.getItem("data");
    return dataSalvo;
  });

  const theme = useTheme();
  const logo = theme.logo;
  const fav = theme.fav;

  return (
    <>
      <Banner blendmode='multiply' />
      <QRCodeSection>
          <h6 className="titulo">
            Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!
          </h6>
          <div className="card">
            <div className="logos">
              <img src={logo} alt="logo da code chella" />
              <img src={fav} className="fav" alt="favicon da code chella" />
            </div>

            <div className="info">
              <img src={code} alt="qr code" />
              <div className="text">
                <h6>{nome}</h6>
                <p>{tipo}</p>
                <p>Setor: {setor}</p>
                <p>Data: {data}</p>
                <p>Local: São Paulo-SP</p>
              </div>
            </div>
          </div>
      </QRCodeSection>
    </>
  );
}
