import styles from './Newsletter.module.css';
function Newsletter() {
  return (
    <>
      <section className={styles.newsletter}>
        <div className={styles.newsletterInfo}>
          <h1>Newsletter</h1>
          <p>assine e fique por dentro das novidades</p>
        </div>
        <form className={styles.newsletterForm}>
          <input type="text" placeholder="Seu e-mail" />
          <button type="submit">Assinar</button>
        </form>
      </section>
    </>
  );
}
export default Newsletter;
