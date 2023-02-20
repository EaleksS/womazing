import Link from 'next/link';
import styles from '../styles/Menu.module.scss';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import tel from '../assets/tel.svg';
import basket from '../assets/basket.svg';

export default function Menu() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        <Image width={25} height={25} src={logo} alt="logo" />
        <h1>womazing</h1>
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link className={styles.link} href="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Магазин
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              О бренде
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.info}>
        <Link href="/" className={styles.tel}>
          <Image width={27} height={27} src={tel} alt="tel" />
          <p>+7 (495) 823-54-12</p>
        </Link>
        <Link href="/" className={styles.basket}>
          <Image width={24} height={24} src={basket} alt="basket" />
        </Link>
      </div>
    </header>
  );
}
