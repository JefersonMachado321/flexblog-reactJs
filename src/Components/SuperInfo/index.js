import styles from './SuperInfo.module.css';

function SuperInfo() {
  return (
    <>
      <div className={styles.superInfoBg}>
        <div className={styles.superInfo}>
          <p>Seg / Sex - 08:00 ás 18:00</p>
          <a href="tel:+552199999999">+55 21 9999-9999</a>
          <p>Av. Ali Perto, 330, Botafogo - DF</p>
        </div>
      </div>
    </>
  );
}

export default SuperInfo;
