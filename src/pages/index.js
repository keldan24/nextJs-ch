import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css'
import ProjectCard from '../components/ProjectCard';


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="Portfolio Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to My Portfolio</h1>
                <Image
                    src="/images/profile.jpeg"
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className={styles.profileImage}
                />
                <p className={styles.description}>
                    I am a web developer with a passion for building great applications.
                </p>
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
                <div className={styles.about}>
                    <h1>About Me</h1>
                    <p>Here is some information about me.</p>
                </div>
                <div className={styles.contacts}>
                    <h1>Contact Me</h1>
                    <p>You can reach me at example@example.com</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
