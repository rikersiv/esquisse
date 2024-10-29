import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
    const pages = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About us",
            url: "/about"
        },
        {
            name: "Contact Us",
            url: "/contact"
        }
    ];
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
            <Image
                        src={'/assets/images/esquisse.svg'}
                        width={150}
                        height={50}
                    />
                <nav>
                    <ul>
                        {pages.map((page, index) => (
                            //{className={`${styles.link} ${pathname === page.url ? styles.active : ''}`
                            <li key={index}>
                                <label>0{index+1}</label>
                                <Link href={page.url}>{page.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className={styles.button}>En</button>
            </div>
        </div>

    )
}

export default Header;