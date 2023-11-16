import styles from './Produtos.module.css';
import imgProduto1 from './img/produtos1.jpg';
import imgProduto2 from './img/produtos2.jpg';
import imgProduto3 from './img/produtos3.jpg';

function Produtos() {
  return (
    <>
      <section className={styles.produtos} id="produtos">
        <h1>Produtos</h1>
        <div className={styles.produtosContainer}>
          <div className={`${styles.produtosItem} ${styles.purple}`}>
            <h2>Purple</h2>
            <img src={imgProduto1} alt="Produto um" />
          </div>

          <div className={`${styles.produtosItem} ${styles.pink}`}>
            <h2>Pink</h2>
            <img src={imgProduto2} alt="Produto dois" />
          </div>

          <div className={`${styles.produtosItem} ${styles.blue}`}>
            <h2>Blue</h2>
            <img src={imgProduto3} alt="Produto tres" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Produtos;
