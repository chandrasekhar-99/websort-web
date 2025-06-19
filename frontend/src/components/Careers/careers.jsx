import styles from './careers.module.css';


function Careers() {
  return (
    <div className={styles.aboutUsContainer}>
      <h1 className={styles.title}>Careers</h1>
      <p className={styles.description}>
        We are always looking for talented individuals to join our team. If you are passionate about technology and want to make an impact, we would love to hear from you!
      </p>
      <p className={styles.description}>
        Check out our current job openings and apply today!
      </p>
      <p className={styles.description}>
        Together, we can build amazing products that change the world.
      </p>
    </div>
  );
}

export default Careers; 