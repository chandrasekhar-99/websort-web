import styles from './contactus.module.css';


function ContactUs() {
  return (
    <div className={styles.contactUsContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us.
      </p>
      <p className={styles.description}>
        You can contact us via email at support@websort.com or through our social media channels.
      </p>
      <p className={styles.description}>
        Together, we can build amazing products that change the world.
      </p>
    </div>
  );
}   

export default ContactUs;