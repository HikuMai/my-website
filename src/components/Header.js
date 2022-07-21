import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.sNav}>
      <nav className={styles.cNav}>
        <ul className={styles.linkRow}>
          <li className={styles.linkItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
