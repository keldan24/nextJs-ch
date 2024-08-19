import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/About.module.css';
import '../styles/global.css'


export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
      </Head>
      <Header />
      <h1>About Me</h1>
      <p>Here is some information about me.</p>
    </div>
  );
}
