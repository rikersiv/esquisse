import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Header({ bgColor, logo, banner, isFooterVisible, homepage }) {
    const router = useRouter();
    const { pathname } = router;
    const pages = [
        { name: "Home", url: "/" },
        { name: "About us", url: "/about" },
        { name: "Contact Us", url: "/contact" }
    ];

    const headerRef = useRef(null);

    useEffect(() => {
        if (pathname === '/') {
            gsap.set(headerRef.current, { y: -500 });
        }
        else if (pathname !== '/contact') {
            gsap.from(headerRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.5,
                delay: 1,
                ease: "power2.out"
            });
        }

        if (homepage) {
            gsap.fromTo(headerRef.current, 
                { y: -500, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [pathname, homepage]);

    return (
        <div
            className={styles.header}
            style={{ backgroundColor: bgColor, display: isFooterVisible ? 'none' : 'unset' }}
            ref={headerRef} // Attach the ref to the header
        >
            <div className={styles.wrapper}>
                <Link href={'/'} className={styles.logo}>
                    <Image
                        style={{ display: 'block' }}
                        src={`/assets/images/${logo}`}
                        width={150}
                        height={50}
                        alt="Logo" // Add alt text for accessibility
                    />
                </Link>

                <nav>
                    <ul>
                        {pages.map((page, index) => (
                            <li key={index} className={`${pathname === page.url ? styles.active : ''} ${banner ? styles.bannerTrue : ''}`}>
                                <label>0{index + 1}</label>
                                <Link href={page.url}>{page.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className={styles.button} style={{ color: banner ? 'var(--light-blue)' : 'var(--secondary-color)' }}>En</button>
            </div>
        </div>
    );
}

export default Header;