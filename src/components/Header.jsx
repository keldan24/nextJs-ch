import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/"><p className={styles.navLink}>Home</p></Link></li>
          <li className={styles.navItem}><Link href="/about"><p className={styles.navLink}>About</p></Link></li>
          <li className={styles.navItem}><Link href="/projects"><p className={styles.navLink}>Projects</p></Link></li>
          <li className={styles.navItem}><Link href="/contact"><p className={styles.navLink}>Contact</p></Link></li>
        </ul>
      </nav>
    </header>
  );
}