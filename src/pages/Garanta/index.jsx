import Banner from '../../components/Banner';
import styles from './Garanta.module.scss';
import banner from '/garanta-banner.png';

export default function Garanta(){
  return (
    <section>      
      <Banner src={banner} alt="" />
    </section>
  )
}