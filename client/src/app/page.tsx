import Image from 'next/image';
import styles from './page.module.scss';
import previewPhoto from '../assets/preview-photo.jpg';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div></div>
        <div>
          <Image
            width={434}
            height={652}
            src={previewPhoto}
            alt="previw photo"
          />
        </div>
      </div>
    </main>
  );
}
