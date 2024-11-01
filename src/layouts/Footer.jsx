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
            name: "Contacts",
            url: "/contact"
        }
    ];

    // Function to handle scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: adds smooth scrolling effect
        });
    };

    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.arrow} onClick={scrollToTop}>
                    <Image
                        src={'/assets/images/arrow.svg'}
                        width={100}
                        height={100}
                        alt="Scroll to top"
                    />
                </div>
                <div className={styles.navigation}>
                    <ul>
                        {pages.map((page, index) => (
                            <li key={index}>
                                <Link className={styles.links} href={page.url}>{page.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.column}>
                        <div></div>
                        <div className={styles.contacts}>
                            <div className={styles.contactUs}>
                                <small>Contact Us</small>
                                <p>+1 891 989-11-91</p>
                                <p>@esquisse.com</p>
                            </div>

                            <div className={styles.socialMedia}>
                                <small>Follow Us</small>
                                <p>
                                    <Link className={styles.links} href={"#"}>Telegram</Link> / 
                                    <Link className={styles.links} href={"#"}>Whatsapp</Link> / 
                                    <Link className={styles.links} href={"#"}>Twitter</Link>
                                </p>
                            </div>
                            <div className={styles.copyright}>
                                <p>© 2023 — Copyright</p>
                                <Link className={styles.links} href={"#"}>Privacy</Link>
                            </div>
                        </div>
                        <div className={styles.location}>
                            <p>2972 Westheimer Rd. Sta. Ana, Illinois 85486</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
