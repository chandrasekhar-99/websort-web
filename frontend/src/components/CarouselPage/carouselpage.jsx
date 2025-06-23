import styles from './carouselpage.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ComputerImage from '../../assets/computer.png'
import bulb from '../../assets/bulb.png'

function CarouselPage() {

  const renderContent =()=>{
    return(
      <>
      <div className={styles.contentContainer}>
            <div className={styles.mobileContentContainer}>
              <h1 className={styles.title}>See Our Work in Web Design & Development</h1>
              <img src={ComputerImage} alt="ComputerImage" className={styles.mobileContentImage}/>
              <p className={styles.Paragraph}>
                We specialize in building responsive, user-friendly websites tailored to client needs. Take a look at our recent projects to see how design and functionality come together.
              </p>
              <button className={styles.button}>Know More</button>
            </div>
            <div>
              <img src={ComputerImage} alt="ComputerImage" className={styles.contentImage}/>
            </div>
      </div>
      <div className={styles.contentContainer2}>
            <div className={styles.mobileContentContainer}>
              <h1 className={styles.title}>Why We Stand Out</h1>
              <img src={bulb} alt="bulbImage" className={styles.mobileBulbImage}/>
              <p className={styles.Paragraph}>At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.</p>
            </div>
            <div>
              <img src={bulb} alt="bulbImage" className={styles.bulbImage}/>
            </div>
      </div>
      </>
    )
  }

  return (
    <>
    <div className={styles.carouselContainer}>
      <h1 className={styles.title}>Fueling the Future with Innovation</h1>
    <div className={styles.carouselWrapper}>
      <Carousel 
        autoPlay 
        infiniteLoop 
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        swipeable={true}
        emulateTouch={true}
      >
        <div className={`${styles.slideContainer} ${styles.slide1}`}>
          <div className={styles.slideContent}>
            <p>AI and IoT-driven products</p>
          </div>
        </div>
        <div className={`${styles.slideContainer} ${styles.slide2}`}>
          <div className={styles.slideContent}>
            <p>Content for the second slide goes here</p>
          </div>
        </div>
        <div className={`${styles.slideContainer} ${styles.slide3}`}>
          <div className={styles.slideContent}>
            <p>Expanding globally with scalable SaaS tools</p>
          </div>
        </div>
      </Carousel>
    </div>
     <button className={styles.button}>Know More</button>
    </div>
    {renderContent()}
    </>
  );
}

export default CarouselPage;