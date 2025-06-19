import styles from './home.module.css';
import Header from '../Header/header';
import AboutUs from '../AboutUs/aboutus';
import Projects from '../Projects/projects';
import ContactUs from '../ContactUs/contactus';
import Footer from '../Footer/footer';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <h1 className={styles.title}>Welcome to Our Home Page</h1>
      <p className={styles.description}>
        Discover our services and offerings tailored just for you.
      </p>
      <AboutUs />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
// This code defines a simple home component for a website. It includes a title and a description, styled using CSS modules. The component can be imported and used in other parts of the application to maintain a consistent home page across different pages.