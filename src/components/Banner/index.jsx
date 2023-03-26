import styles from './Banner.module.scss';

export default function Banner({titulo, srcsetTablet, srcsetDesktop, srcMobile, alt}) {
  return (
    <header className={styles.banner}>
      <h1>{titulo}</h1>
      <picture>
        <source srcSet={srcsetTablet} media= "(min-width: 768px)"  />
        <source srcSet={srcsetDesktop} media="(min-width: 1440px)" />
        <img src={srcMobile} alt={alt} />
      </picture>
    </header>
  )
}