import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Contact.module.css';
import '../styles/global.css'


export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Header />
      <h1>Contact Me</h1>
      <p>You can reach me at example@example.com</p>
    </div>
  );
}