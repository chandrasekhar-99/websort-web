import{ useState } from 'react';
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import styles from  './achievement.module.css'
import webAchieve from '../../assets/achieve1.jpg' 
import appAchieve from '../../assets/achieve2.jpg'
import digitalAchieve from '../../assets/achieve3.jpg'


const slides = [
  {
    src: webAchieve,
    text: 'Web Development'
  },
  {
    src: appAchieve,
    text: 'App Development'
  },
  {
    src: digitalAchieve,
    text: 'Digital Marketing'
  }
];



function Achievement(){
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return(
    <>
    <div className={styles.achievementContainer}>
      <h1 className={styles.headTitle}>One of our proudest achievements.</h1>
      <p className={styles.description}>A standout from our portfolio, this project exemplifies the quality, creativity, and performance we bring to every solution. 
                                                      It's a true reflection of our commitment to excellence.</p>
      <div className={styles.miniContainer}>
        <div>
          <img src={webAchieve} alt='webAchieve' className={styles.achieveImage}/>
          <h2 className={styles.title}>Web Development</h2>
          <button type='button' className={styles.achieveButton}>Explore more</button>
        </div>
        <div>
          <img src={appAchieve} alt='appAchieve'  className={styles.achieveImage}/>
          <h2  className={styles.title}>App Development</h2>
          <button type='button' className={styles.achieveButton}>Explore more</button>
        </div>
        <div>
          <img src={digitalAchieve} alt='digitalAchieve'  className={styles.achieveImage}/>
          <h2  className={styles.title}>Digital Marketing</h2>
          <button type='button' className={styles.achieveButton}>Explore more</button>
        </div>
      </div>
    </div>
    <div className={styles.achieveMobileContainer}>
      <h1 className={styles.headTitle}>One of our proudest achievements.</h1>
      <p className={styles.description}>A standout from our portfolio, this project exemplifies the quality, creativity, and performance we bring to every solution. 
                                                      It's a true reflection of our commitment to excellence.</p>
      <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <img
          src={slides[current].src}
          alt={`Slide ${current + 1}`}
          className={styles.image}
        />
        <div className={styles.caption}>{slides[current].text}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={prevSlide}><CaretLeft size={32} weight="bold"/></button>
        <button className={styles.button} onClick={nextSlide}><CaretRight size={32} weight="bold"/></button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Achievement