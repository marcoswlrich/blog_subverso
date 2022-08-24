import styles from './styles.module.scss';

export function Footer() {
  return (
    <div className={styles.container}>
    <footer className={styles.footer}>
      <div className={styles.footer__newsletter}>
        <h4 className={styles.footer__newsletter__headline}>
          Join the Tropic newsletter to receive groundbreaking travel rewards
        </h4>
        <span>Unsubscribe at any time.</span>
        <div className={styles.footer__newsletter__form}>
          <input className={styles.input} type="email" placeholder='Your email' />
          <button>Subscribe</button>
        </div>
      </div>
      <div className={styles.footer__content} >
        <div className={styles.footer__content__col}>
          <div className={styles.footer__content__col__headline}></div>
          <ul className={styles.footer__content__col__links}>
            <li>
              <a href="">opcao 1</a>
            </li>
            <li>
              <a href="">opcao 2</a>
            </li>
            <li>
              <a href="">opcao 3</a>
            </li>
            <li>
              <a href="">opcao 4</a>
            </li>
            <li>
              <a href="">opcao 5</a>
            </li>
          </ul>
        </div>
        
        
      </div>
      <div className={styles.footer__base}>
        <h2>Subverso</h2>
        <span className={styles.footer__base__year}>
        Tropic&nbsp;&copy;&nbsp;{new Date().getFullYear()}
        </span>
        <ul className={styles.footer__base__socials}>
          <li><a href=""></a></li>
        </ul>
      </div>
    
    </footer>
    </div>
  )
}