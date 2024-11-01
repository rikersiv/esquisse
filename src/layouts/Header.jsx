import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/router";

function Header({ bgColor, logo, banner, isFooterVisible }) {
    const router = useRouter();
    const { pathname } = router;
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
        <div className={styles.header} style={{ backgroundColor: bgColor, display: isFooterVisible ? 'none' : 'unset' }}>
            <div className={styles.wrapper}>
                <Link href={'/'}>
                    <Image
                        style={{display: 'block'}}
                        src={`/assets/images/${logo}`}
                        width={150}
                        height={50}
                    />
                </Link>

                <nav>
                    <ul>
                        {pages.map((page, index) => (
                            //{className={`${styles.link} ${pathname === page.url ? styles.active : ''}`
                            <li key={index} className={`${pathname === page.url ? styles.active : ''} ${banner ? styles.bannerTrue : ''}`}>
                                <label>0{index + 1}</label>
                                <Link href={page.url}>{page.name}{isFooterVisible}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className={styles.button} style={{ color: banner ? 'var(--light-blue)' : 'var(--secondary-color)' }}>En</button>
            </div>
        </div>

    )
}

export default Header;