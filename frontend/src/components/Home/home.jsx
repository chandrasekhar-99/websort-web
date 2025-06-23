import styles from './home.module.css';
import Header from '../Header/header';
import AboutUs from '../AboutUs/aboutus';
import Projects from '../Projects/projects';
import CarouselPage from '../CarouselPage/carouselpage';
import ContactUs from '../ContactUs/contactus';
import Footer from '../Footer/footer';

function Home() {
  return (
    <>
      <Header />
        <div className={styles.heroSection}>
          
          <h1 className={styles.title}>Digitizing Ideas with Clean Code & Modern <br />Design</h1>
          <p className={styles.description}>
            At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.
          </p>
      
          <div>
            <button type='button' className={styles.button}>Know More</button>
            <button type='button' className={styles.button}>Contact Us</button>
          </div>
        </div>
      <AboutUs />
      <Projects />
      <CarouselPage/>
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
// This code defines a simple home component for a website. It includes a title and a description, styled using CSS modules. The component can be imported and used in other parts of the application to maintain a consistent home page across different pages.