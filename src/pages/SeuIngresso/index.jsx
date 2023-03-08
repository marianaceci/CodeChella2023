import Banner from '../../components/Banner';
import styles from './SeuIngresso.module.scss';
import banner from '/seu-ingresso-banner.png';

export default function SeuIngresso(){
  return (
    <section>      
      <Banner src={banner} alt="" />
    </section>
  )
}