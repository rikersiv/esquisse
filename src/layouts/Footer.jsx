import React, { useRef } from 'react';
import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { gsap } from 'gsap';

function Footer() {
    const imageRef = useRef(null);
    const arrowRef = useRef(null);
    const tl = gsap.timeline();

    const handleMouseEnter = () => {
        const tl = gsap.timeline();
        imageRef.current.src = '/assets/images/icons/arrow-dark.svg';
        tl.to(imageRef.current, {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
                gsap.to(imageRef.current, {
                    opacity: 1,
                    duration: 0.5
                });
            }
        })
        .to(arrowRef.current, {
            backgroundColor: '#ffffff',
            duration: 0.1,
            position: "+=0" 
        });
    };

    const handleMouseLeave = () => {
        const tl = gsap.timeline();
        imageRef.current.src = '/assets/images/arrow.svg';
        tl.to(imageRef.current, {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
                gsap.to(imageRef.current, {
                    opacity: 1,
                    duration: 0.1
                });
            }
        })
        .to(arrowRef.current, {
            backgroundColor: 'transparent',
            duration: 0.1,
            position: "+=0" 
        });
    };

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.arrow} onClick={scrollToTop} ref={arrowRef} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    <Image ref={imageRef}
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
                                <p>sales@esquisse.io</p>
                                {/* <p>+1 891 989-11-91</p> */}
                                
                            </div>
                            <div className={styles.copyright}>
                                <p>© 2024 — Copyright</p>
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
