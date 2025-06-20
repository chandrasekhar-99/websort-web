import styles from './aboutus.module.css';

function AboutUs() {
  return (
    <div className={styles.aboutUsContainer}>
      <div>
        <h1 className={styles.title}>About Us</h1>
        <h1 className={styles.titleSecondary}>
          Where Innovation Meets Execution
        </h1>
      </div>
      <div>
        <p className={styles.descriptionParagraph}>
          Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results. We specialize in web development, mobile app development, UI/UX design, and digital marketing—delivering responsive websites, high-performance Android/iOS apps, and visually engaging interfaces. Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation, helping businesses grow and connect with their ideal audience.
        </p>
        <button className={styles.button}>Know More</button>
      </div>
    </div>
  );
}

export default AboutUs;