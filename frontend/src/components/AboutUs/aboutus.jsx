import styles from './aboutus.module.css';

function AboutUs() {
  return (
    <div className={styles.aboutUsContainer}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        We are a team of passionate developers dedicated to building innovative solutions that make a difference.
      </p>
      <p className={styles.description}>
        Our mission is to create user-friendly applications that enhance productivity and improve everyday life.
      </p>
      <p className={styles.description}>
        Join us on our journey to transform ideas into reality!
      </p>
    </div>
  );
}

export default AboutUs;