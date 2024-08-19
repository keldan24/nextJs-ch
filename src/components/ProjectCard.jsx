import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, imageSrc }) {
  return (
    <div className={styles.card}>
      <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={200}
        className={styles.image}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}