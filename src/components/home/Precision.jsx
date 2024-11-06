import Image from 'next/image';
import styles from './Precision.module.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Precision() {
    const precisionRef = useRef(null);
    const titleRef = useRef(null);
    const cardWrapper = useRef(null);

    const cardItems = [
        {
            src: '/assets/images/icons/connection.svg',
            title: 'Accelerate Connections',
            content: 'Connect with ideal partners quickly and effortlessly through precision-driven algorithms.'
        },
        {
            src: '/assets/images/icons/productivity.svg',
            title: 'Elevate Productivity',
            content: 'Use esquisse’s seamless interface to streamline networking, focusing more on collaboration than searching.'
        },
        {
            src: '/assets/images/icons/partnership.svg',
            title: 'Cultivate Enduring Partnerships',
            content: 'Build trust-based relationships that support lasting growth and shared success.'
        }
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: precisionRef.current,
                start: 'top 50%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.fromTo(titleRef.current, 
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.5,
                ease: "ease",
            })
        .fromTo(cardWrapper.current, 
            { x: 200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "ease",
            }, "<"); 
        return () => {
            if (ScrollTrigger) {
                ScrollTrigger.kill();
            }
        };
    }, []);

    return (
        <div className={styles.precision} ref={precisionRef}>
            <h1 ref={titleRef} style={{ opacity: 0 }}>
                <strong>Precision Driven</strong> Connectivity Aligned<br />with Your <strong>Business Goals</strong>
            </h1>
            <div ref={cardWrapper} className={styles.cardWrapper}>
                {cardItems.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <Image src={item.src} width={30} height={30} alt={item.title} />
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Precision;
