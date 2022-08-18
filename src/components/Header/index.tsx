import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
         <h2 className={styles.header__content__logo}>Subverso</h2>
      
        <nav className={styles.header__content__nav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="">Categorias</a></li>
            <li><a href="">Autor</a></li>
            <li><a href="">blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}