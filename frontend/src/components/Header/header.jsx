import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>Welcome to Our Website</h1>
      <p className={styles.description}>
        We are glad to have you here. Explore our services and offerings.
      </p>
    </div>
  );
}

export default Header;
// This code defines a simple header component for a website. It includes a title and a description, styled using CSS modules. The component can be imported and used in other parts of the application to maintain a consistent header across different pages.
// The header serves as an introduction to the website, inviting users to explore further. The use