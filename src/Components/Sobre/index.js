import styles from './Sobre.module.css';
import imgSobre1 from './img/sobre1.jpg';
import imgSobre2 from './img/sobre2.jpg';

function Sobre() {
  return (
    <>
      <section className={styles.sobre} id="sobre">
        <div className={styles.sobreInfo}>
          <h1>Sobre</h1>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente apropriadas objetivos.
          </p>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente apropriadas objetivos.
          </p>
        </div>
        <div className={styles.sobreImg}>
          <img src={imgSobre1} alt="Sobre 1" />
        </div>
        <div className={styles.sobreImg}>
          <img src={imgSobre2} alt="Sobre 2" />
        </div>
      </section>
    </>
  );
}

export default Sobre;
