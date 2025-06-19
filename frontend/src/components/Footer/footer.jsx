import styles from './footer.module.css';


function Footer () {
  return (
    <div className={styles.footerContainer}>
      <h1 className={styles.title}>Footer</h1>
      <p className={styles.description}>
        Thank you for visiting our website! We hope you found the information you were looking for.
      </p>
    </div>
  );
} 

export default Footer;