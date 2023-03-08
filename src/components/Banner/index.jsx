import styles from './Banner.module.scss';

export default function Banner({titulo, srcsetTablet, srcsetMobile, src, alt}) {
  return (
    <header className={styles.banner}>
      <h1>{titulo}</h1>
      <picture>
        <source srcSet={srcsetTablet} media= "(min-width: 768px) and (max-width: 1024px)"  />
        <source srcSet={srcsetMobile} media="(max-width: 768px)" />
        <img src={src} alt={alt} />
      </picture>
    </header>
  )
}