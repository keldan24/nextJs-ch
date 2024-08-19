import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Projects.module.css';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
      </Head>
      <Header/>
      <h1>Projects</h1>
      <div className={styles.projectsGrid}>
        <ProjectCard
          title="Project 1"
          description="Description of Project 1"
          imageSrc="/images/project1.jpeg"
        />
        <ProjectCard
          title="Project 2"
          description="Description of Project 2"
          imageSrc="/images/project2.png"
        />
        <ProjectCard
          title="Project 3"
          description="Description of Project 3"
          imageSrc="/images/project3.jpeg"
        />
      </div>
    </div>
  );
}
