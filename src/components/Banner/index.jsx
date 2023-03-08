import styles from './Banner.module.scss';

export default function Banner({srcsetTablet, srcsetMobile, src, alt}) {
  return (
    <header className={styles.banner}>
      <picture>
        {/* <source srcset={srcsetDesktop} media="(min-width: 1400px)" /> */}
        <source srcset={srcsetTablet} media="(min-width: 768px)" />
        <source srcset={srcsetMobile} media="(min-width: 320px)" />
        <img src={src} alt={alt} />
      </picture>
    </header>
  )
}