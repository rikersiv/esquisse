import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Marquee.module.css';

function Marquee() {
    const marqueeContentRefs = useRef([]);

    useEffect(() => {
        marqueeContentRefs.current.forEach((marqueeContentElement) => {
            if (marqueeContentElement) {
                const totalWidth = marqueeContentElement.scrollWidth;
                const viewportWidth = marqueeContentElement.parentElement.clientWidth;

                gsap.set(marqueeContentElement, { x: viewportWidth });

                gsap.to(marqueeContentElement, {
                    x: -totalWidth,
                    duration: 15,
                    ease: "none",
                    repeat: -1,
                });
            }
        });
    }, []);

    const marqueeItems = [
        {
            bgColor: 'var(--light-blue)',
            textColor: 'var(--secondary-color)',
            quote: '“In just days, we found the ideal collaborator for our next big project, unlocking opportunities faster than we imagined possible.”'
        },
        {
            bgColor: 'var(--primary-color)',
            textColor: 'white',
            quote: '“Esquisse transformed the way we connect—networking has never been this effortless!”',
            quote1: '“We found the perfect partner for our next project in just days.”'
        },
        {
            bgColor: 'var(--secondary-color)',
            textColor: 'white',
            quote: '“With AI-driven matches that felt like they truly understood our needs, we forged partnerships that aligned perfectly with our vision.”'
        },
    ];

    return (
        <div className={styles.marquee}>
            {marqueeItems.map((item, index) => (
                <div 
                    key={index} 
                    className={styles.marqueeItem} 
                    style={{ backgroundColor: item.bgColor }}
                >
                    <div 
                        className={styles.marqueeContent} 
                        ref={el => marqueeContentRefs.current[index] = el}
                    >
                        <blockquote className={styles.quote} style={{ color: item.textColor }}>
                            {item.quote}
                        </blockquote>
                        {item.quote1 && (
                            <>
                                <span className={styles.separator} style={{ color: item.textColor }}>|</span>
                                <blockquote className={styles.quote} style={{ color: item.textColor }}>
                                    {item.quote1}
                                </blockquote>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Marquee;
