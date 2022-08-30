import styles from './styles.module.scss';


export function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__content__heading}>
            Você chegou!
          </h1>
          <p className={styles.hero__content__text}>
            É um prazer receber você aqui. O Subverso é um laboratório de
            escrita. Falamos sobre música, literatura e expomos algumas obras
            autorais. Seja bem-vindo!
          </p>
          <p className={styles.hero__content__text}>
            Quer receber novidades? Ou entrar em contato?
          </p>
          <div className={styles.hero__content__btn}>
            <button>Newsletter</button>
            <button>Contato</button>
          </div>
        </div>
      </div>
    </div>
  )

}