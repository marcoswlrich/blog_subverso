import Image from 'next/image';
import styles from './styles.module.scss';
import heroPic from '../../../public/images/hero.jpg'

export function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero__left}>
          <h1 className={styles.hero__left__heading}>
              Pagina blog subverso
          </h1>
          <p className={styles.hero__left__text}>Por Marcos Wlrich</p>
        </div>
        <div className={styles.hero__right}>
          <Image className={styles.hero__right__image} src={heroPic} alt=""
        objectPosition="50% 30%"/>
        </div>
      </div>
    </div>
  )

}