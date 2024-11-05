import React, { useEffect, useRef, useState } from 'react';
import Banner from "@/components/home/Banner";
import MainLayout from "@/layouts/MainLayout";
import styles from './index.module.css';
import Image from "next/image";
import { gsap } from 'gsap';

function Contact() {
    const imageRef = useRef(null);
    const sendRef = useRef(null);
    const [placeholders, setPlaceholders] = useState({
        name: "Name",
        email: "Email",
        phone_number: "Phone Number",
        your_business: "Your Business",
        message: "Message"
    });

    const handleMouseEnter = (field) => {
        setPlaceholders(prev => ({
            ...prev,
            [field]: `Type Here`
        }));
    };

    const handleMouseLeave = (field) => {
        const formattedField = field.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

        setPlaceholders(prev => ({
            ...prev,
            [field]: formattedField
        }));
    };
    const handleButtonMouseEnter = () => {
        const tl = gsap.timeline();
        imageRef.current.src = '/assets/images/icons/arrow-blue.svg';
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
            .to(sendRef.current, {
                backgroundColor: '#ffffff',
                duration: 0.1,
                position: "+=0"
            });
    };

    const handleButtonMouseLeave = () => {
        const tl = gsap.timeline();
        imageRef.current.src = '/assets/images/icons/arrow-slant.svg';
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
            .to(sendRef.current, {
                backgroundColor: 'transparent',
                duration: 0.1,
                position: "+=0"
            });
    };

    const autoResize = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    useEffect(() => {
        const button = document.querySelector(`.${styles.scroll}`);

        const createRippleEffect = () => {
            const tl = gsap.timeline();

            tl.to(button, {
                boxShadow: "0 0 0 20px rgba(202, 231, 255, 0.53), 0 0 0 20px rgba(202, 231, 255, 0)",
                duration: 0.4,
                ease: "ease"
            })
                .to(button, {
                    boxShadow: "0 0 0 20px rgba(202, 231, 255, 0.25), 0 0 0 40px rgba(202, 231, 255, 0.28)",
                    duration: 0.2,
                    ease: "ease"
                })
                .to(button, {
                    boxShadow: "0 0 0 20px rgba(202, 231, 255, 0), 0 0 0 40px rgba(202, 231, 255, 0.28)",
                    duration: 0.4,
                    ease: "ease"
                })
                .to(button, {
                    boxShadow: "0 0 0 20px rgba(202, 231, 255, 0), 0 0 0 0px rgba(202, 231, 255, 0)",
                    duration: 0.3,
                    ease: "ease"
                });
        };

        button.addEventListener("mouseenter", createRippleEffect);

        return () => {
            button.removeEventListener("mouseenter", createRippleEffect);
        };
    }, []);

    return (
        <MainLayout>
            <Banner bgPath="url('/assets/images/contact_bg.svg')" isContactPage={true}>
                <p style={{ marginTop: 'auto', marginBottom: '-3rem' }}>Contact Us</p>
                <button className={styles.scroll}>SCROLL<br />DOWN</button>
            </Banner>

            <div className={styles.children}>
                <div className={styles.contactWrapper}>
                    <h1><strong>Enter</strong> the Vanguard of<br />Next-Generation Networking</h1>
                    <form>
                        <div className={styles.row}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={placeholders.name}
                                onMouseEnter={() => handleMouseEnter('name')}
                                onMouseLeave={() => handleMouseLeave('name')}
                            />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder={placeholders.email}
                                onMouseEnter={() => handleMouseEnter('email')}
                                onMouseLeave={() => handleMouseLeave('email')}
                            />
                        </div>
                        <div className={styles.row}>
                            <input
                                type="text"
                                id="phone_number"
                                name="phone_number"
                                placeholder={placeholders.phone_number}
                                onMouseEnter={() => handleMouseEnter('phone_number')}
                                onMouseLeave={() => handleMouseLeave('phone_number')}
                            />
                            <input
                                type="text"
                                id="your_business"
                                name="your_business"
                                placeholder={placeholders.your_business}
                                onMouseEnter={() => handleMouseEnter('your_business')}
                                onMouseLeave={() => handleMouseLeave('your_business')}
                            />
                        </div>
                        <div className={styles.messageWrapper}>
                            <textarea
                                placeholder={placeholders.message}
                                className={styles.message}
                                id="message"
                                name="message"
                                onInput={autoResize}
                                onMouseEnter={() => handleMouseEnter('message')}
                                onMouseLeave={() => handleMouseLeave('message')}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={styles.button}
                            onMouseEnter={handleButtonMouseEnter}
                            onMouseLeave={handleButtonMouseLeave}
                        >
                            SEND
                            <div className={styles.image} ref={sendRef}>
                                <Image src={'/assets/images/icons/arrow-slant.svg'} width={20} height={20} ref={imageRef} />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}

export default Contact;