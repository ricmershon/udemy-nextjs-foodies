import Link from "next/link";

import styles from './main-header.module.css';
import logoImage from '@/assets/logo.png';

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href='/'>
                <img src={logoImage.src} alt="A plate with food" />
                NextLevel Food
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href='/meals'>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/community'>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}