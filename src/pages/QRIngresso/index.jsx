import Banner from '../../components/Banner';
import styles from './QRIngresso.module.scss';
import bannerMobile from '/QRCodeIngresso/qr-banner_s.png';
import bannerTablet from '/QRCodeIngresso/qr-banner_m.png';
import bannerDesktop from '/QRCodeIngresso/qr-banner_g.png';
import { useState } from 'react';
import code from './qr-code.png';
import logo from './logo-black.png';
import fav from './fav-white.svg';

export default function QRIngresso() {

  const [nome, setNome] = useState(() => {
    const nomeSalvo = localStorage.getItem("nome");
    return nomeSalvo;
  });

  const [tipo, setTipo] = useState(() => {
    const tipoSalvo = localStorage.getItem("tipo");
    return tipoSalvo;
  });




  return (
    <section>      
      <Banner
        src={bannerDesktop}
        alt="duas meninas conversando e rindo"
        srcsetTablet={bannerTablet}
        srcsetMobile={bannerMobile}
        titulo="Seu ingresso está aqui!"
      />
      <div className={styles.qr}>
        <h6 className={styles.qr__titulo}>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h6>
        <div className={styles.qr__card}>

          <div className={styles.qr__card__logos}>
            <img src={logo} alt="logo da code chella" />
            <img src={fav} alt="favicon da code chella" />
          </div>
          
          <div className={styles.qr__card__info}>
            <img src={code} alt="qr code" />            
            <div className={styles.qr__card__info__text}>
              <h6>{nome}</h6>
              <p>{tipo}</p>
              <p>Setor Pista</p>
              <p>Data: 11/03</p>
              <p>Local: São Paulo-SP</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}