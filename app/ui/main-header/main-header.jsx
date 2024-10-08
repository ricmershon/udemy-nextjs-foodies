import Link from "next/link";
import Image from "next/image";

import styles from './main-header.module.css';
import MainHeaderBackground from "./main-header-background";
import logoImage from '@/assets/logo.png';

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href='/'>
                    <Image src={logoImage} alt="A plate with food" priority />
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
        </>
    );
}