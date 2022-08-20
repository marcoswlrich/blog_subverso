import React, {useEffect, useState } from 'react';

import { BiMenuAltRight} from 'react-icons/bi';
import { AiOutlineClose } from "react-icons/ai";
import { MdSearch } from 'react-icons/md';

import styles from './styles.module.scss';

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [size, setSize] = useState<any>({
    width: null,
    height: null,
  });

  useEffect(() => {
      const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if(size.width > 768 && menuOpen ) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  }
  
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
         <h2 className={styles.header__content__logo}>Subverso</h2>
      
        <nav className={ `${styles.header__content__nav} ${
          menuOpen && size.width < 768 ? styles.isMenu : ""
        }`} 
        >
          <ul className={styles.menuList}>
            <li className={styles.list}><a href="#" className={styles.link} onClick={menuToggleHandler}>Home</a></li>
            <li className={styles.list}><a href="" className={styles.link} onClick={menuToggleHandler}>Categorias</a></li>
            <li className={styles.list}><a href="" className={styles.link} onClick={menuToggleHandler}>Autor</a></li>
            <li className={styles.list}><a href="" className={styles.link} onClick={menuToggleHandler}>blog</a></li>
            <li className={styles.list}>
              <div className={styles.searchIcon}>
                <MdSearch />
              </div>
            </li>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (  
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}