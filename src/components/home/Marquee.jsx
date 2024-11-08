import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Marquee.module.css';

function Marquee() {
    const marqueeContainerRefs = useRef([]);
    const marqueeContentRefs = useRef([]);
    const currentScroll = useRef(0);
    const isScrollingDown = useRef(true);
    
    useEffect(() => {
        const tween = gsap.to(`.${styles.marqueeItem}`, {
            xPercent: -100,
            repeat: -1,
            duration: 10,
            ease: "linear"
        });
    
        gsap.set(`.${styles.marqueeContent}`, { xPercent: 0 });
    
        return () => {
            tween.kill();
        };
    }, []);

    const marqueeItems = [
        [
            {
                bgColor: 'var(--light-blue)',
                textColor: 'var(--secondary-color)',
                quote: '“In just days, we found the ideal collaborator for our next big project, unlocking opportunities faster than we imagined possible.”'
            },
            {
                bgColor: 'var(--light-blue)',
                textColor: 'var(--secondary-color)',
                quote: '“In just days, we found the ideal collaborator for our next big project, unlocking opportunities faster than we imagined possible.”'
            },
            {
                bgColor: 'var(--light-blue)',
                textColor: 'var(--secondary-color)',
                quote: '“In just days, we found the ideal collaborator for our next big project, unlocking opportunities faster than we imagined possible.”'
            },
            {
                bgColor: 'var(--light-blue)',
                textColor: 'var(--secondary-color)',
                quote: '“In just days, we found the ideal collaborator for our next big project, unlocking opportunities faster than we imagined possible.”'
            },
            {
                bgColor: 'var(--light-blue)',
                textColor: 'var(--secondary-color)',
                quote: '“In just days, we found the ideal collaborator for our next big project, unlocking opportunities faster than we imagined possible.”'
            },
        ],
        [
            {
                bgColor: 'var(--primary-color)',
                textColor: 'white',
                quote: '“Esquisse transformed the way we connect—networking has never been this effortless!”',
                quote1: '“We found the perfect partner for our next project in just days.”'
            },
            {
                bgColor: 'var(--primary-color)',
                textColor: 'white',
                quote: '“Esquisse transformed the way we connect—networking has never been this effortless!”',
                quote1: '“We found the perfect partner for our next project in just days.”'
            },
            {
                bgColor: 'var(--primary-color)',
                textColor: 'white',
                quote: '“Esquisse transformed the way we connect—networking has never been this effortless!”',
                quote1: '“We found the perfect partner for our next project in just days.”'
            },
            {
                bgColor: 'var(--primary-color)',
                textColor: 'white',
                quote: '“Esquisse transformed the way we connect—networking has never been this effortless!”',
                quote1: '“We found the perfect partner for our next project in just days.”'
            },
            {
                bgColor: 'var(--primary-color)',
                textColor: 'white',
                quote: '“Esquisse transformed the way we connect—networking has never been this effortless!”',
                quote1: '“We found the perfect partner for our next project in just days.”'
            },
        ],
        [
            {
                bgColor: 'var(--secondary-color)',
                textColor: 'white',
                quote: '“With AI-driven matches that felt like they truly understood our needs, we forged partnerships that aligned perfectly with our vision.”'
            },
            {
                bgColor: 'var(--secondary-color)',
                textColor: 'white',
                quote: '“With AI-driven matches that felt like they truly understood our needs, we forged partnerships that aligned perfectly with our vision.”'
            },
            {
                bgColor: 'var(--secondary-color)',
                textColor: 'white',
                quote: '“With AI-driven matches that felt like they truly understood our needs, we forged partnerships that aligned perfectly with our vision.”'
            },
            {
                bgColor: 'var(--secondary-color)',
                textColor: 'white',
                quote: '“With AI-driven matches that felt like they truly understood our needs, we forged partnerships that aligned perfectly with our vision.”'
            },
            {
                bgColor: 'var(--secondary-color)',
                textColor: 'white',
                quote: '“With AI-driven matches that felt like they truly understood our needs, we forged partnerships that aligned perfectly with our vision.”'
            },
        ],
    ];

    return (
        <div className={styles.marquee}>
            {marqueeItems.map((group, groupIndex) => (
                <div className={styles.marqueeWrapper} key={groupIndex} ref={el => marqueeContainerRefs.current[groupIndex] = el}>
                    <div
                        className={styles.marqueeContent}
                        style={{ backgroundColor: group[0].bgColor }}
                    >
                        {group.map((item, index) => (
                            <div
                                key={index}
                                className={styles.marqueeItem}
                                ref={el => {
                                    if (!marqueeContentRefs.current[groupIndex]) {
                                        marqueeContentRefs.current[groupIndex] = [];
                                    }
                                    marqueeContentRefs.current[groupIndex][index] = el;
                                }}
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
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Marquee;