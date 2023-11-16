import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.menuBg}>
        <div className={styles.menu}>
          <div className={styles.logo}>
            <a href="#">FlexBlog</a>
          </div>
          <nav className={styles.menuNav}>
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#produtos">Produtos</a>
              </li>
              <li>
                <a href="#preco">Preco</a>
              </li>
              <li>
                <a href="#qualidade">Qualidade</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
