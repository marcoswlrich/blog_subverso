import { linkSync } from "fs";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

import styles from './styles.module.scss';

const footerNav = [
  {
    id: 1,
    headline: "Recursos gerais",
    links: ["Blog", "Categorias", "Autor"],
  },
  {
    id: 2,
    headline: "Categorias",
    links: ["Musica", "Literatura", "Autoral"],
  },
  {
    id: 3,
    headline: "Subverso",
    links: ["Contato", "Sobre", "Política de privacidade"],
  },
  // {
  //   id: 3,
  //   headline: "Redes sociais",
  //   links: ["Twitter", "Instagram", "Facebook"]
  // },
];

// const socials = [
//   <FaInstagram />,
//   <FaTwitter />,
//   <FaFacebook />
// ]

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
          {footerNav.map(({id, headline, links}) => (
          <div className={styles.footer__content__col} key={id}>
            <div className={styles.footer__content__col__headline}>{headline}</div>
            <ul className={styles.footer__content__col__links}>
              {links.map((link, index) => (
              <li key={index + 1 }>
                <a href="">{link}</a>
              </li>
              ))}
            </ul>
          </div>
          ))}
          
        </div>
        <div className={styles.footer__base}>
          {/* <h2 className={styles.footer__base__logo}>Subverso</h2> */}
          <p className={styles.footer__base__year}>
            Subverso © {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
          <ul className={styles.footer__base__socials}>
            <li><a className={styles.sociais} href=""><FaTwitter /></a></li>
            <li><a className={styles.sociais} href=""><FaInstagram /></a></li>
            <li><a className={styles.sociais} href=""><FaFacebook /></a></li>
          </ul>
        </div>
      
      </footer>
    </div>
  )
}