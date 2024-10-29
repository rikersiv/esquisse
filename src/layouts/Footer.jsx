import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
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
    return(
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.arrow}>
                    <Image 
                        src={'/assets/images/arrow.svg'}
                        width={100}
                        height={100}
                    />
                </div>
                <div className={styles.links}>
                    <ul>
                        {pages.map((page, index) => (
                            //{className={`${styles.link} ${pathname === page.url ? styles.active : ''}`
                            <li key={index}>
                                <Link href={page.url}>{page.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;