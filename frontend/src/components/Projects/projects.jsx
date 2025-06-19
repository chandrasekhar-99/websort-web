import styles from './projects.module.css';

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Our Projects</h1>
      <p className={styles.description}>
        Explore our diverse range of projects that showcase our expertise and innovation.
      </p>
    </div>
  );
}

export default Projects;
// This code defines a simple projects component for a website. It includes a title and a description, styled using CSS modules. The component can be imported and used in other parts of the application to maintain a consistent projects page across different pages.