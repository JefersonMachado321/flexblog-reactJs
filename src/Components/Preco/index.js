import styles from './Preco.module.css';

function Preco() {
  return (
    <>
      <section className={styles.preco} id="preco">
        <div className={styles.precoItem}>
          <h2>Cobre</h2>
          <span>
            <sup>R$</sup>19
          </span>
          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteudo Secreto</li>
            <li>Suporte 24h</li>
          </ul>
          <a href="#">Comprar</a>
        </div>

        <div className={styles.precoItem}>
          <h2>Prata</h2>
          <span>
            <sup>R$</sup>39
          </span>
          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteudo Secreto</li>
            <li>Suporte 24h</li>
            <li>Compra Exclusiva</li>
          </ul>
          <a href="#">Comprar</a>
        </div>

        <div className={styles.precoItem}>
          <h2>Ouro</h2>
          <span>
            <sup>R$</sup>79
          </span>
          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteudo Secreto</li>
            <li>Suporte 24h</li>
            <li>Compra Exclusiva</li>
            <li>Download dos items</li>
          </ul>
          <a href="#">Comprar</a>
        </div>
      </section>
    </>
  );
}
export default Preco;
