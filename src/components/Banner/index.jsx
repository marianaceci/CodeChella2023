import styles from './Banner.module.scss';

export default function Banner({srcsetTablet, srcsetMobile, src, alt}) {
  return (
    <header className={styles.banner}>
      <picture>
        <source srcSet={srcsetTablet} media= "(min-width: 768px) and (max-width: 1024px)"  />
        <source srcSet={srcsetMobile} media="(max-width: 768px)" />
        <img src={src} alt={alt} />
      </picture>
    </header>
  )
}