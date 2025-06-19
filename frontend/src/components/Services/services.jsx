import styles from './services.module.css';

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.title}>Our Services</h1>
      <p className={styles.description}>
        We offer a wide range of services to meet your needs.
      </p>
    </div>
  );
}

export default Services;
// This code defines a simple services component for a website. It includes a title and a description, styled using CSS modules. The component can be imported and used in other parts of the application to maintain a consistent services page across different pages.