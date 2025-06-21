import styles from './projects.module.css';
import ProjectImage1 from '../../assets/projectImage1.jpg'
import ProjectImage2 from '../../assets/projectImage2.jpg'
import ProjectImage3 from '../../assets/projectImage3.jpg'


function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Our Projects</h1>
      <div className={styles.projectList}>
        <div className={styles.scrollWrapper}>
          <div className={styles.project}>
            <img src={ProjectImage1} alt="AppProject" className={styles.projectImageStyle}/>
            <p className={styles.projectName}>App development</p>
          </div>
          <div className={styles.project}> 
            <img src={ProjectImage2} alt="UIUXProject" className={styles.projectImageStyle}/>
            <p className={styles.projectName}>UI/UX Design</p>
          </div>
          <div className={styles.project}>
            <img src={ProjectImage3} alt="WebProject" className={styles.projectImageStyle}/>
            <p className={styles.projectName}>Web development</p>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Projects;
// This code defines a simple projects component for a website. It includes a title and a description, styled using CSS modules. The component can be imported and used in other parts of the application to maintain a consistent projects page across different pages.