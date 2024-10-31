import React, { useState } from 'react';
import Image from 'next/image';
import styles from './hoverableCards.module.css';

function HoverableCards() {
    const [expandedIndex, setExpandedIndex] = useState(1); 

    const cardItems = [
        {
            bgColor: 'var(--secondary-color)',
            textColor: 'white',
            initialIcon: '/assets/images/icons/plus_white.svg',
            expandedIcon: '/assets/images/icons/minus_white.svg',
            title: 'Scalable Solutions for Strategic Growth',
            content: 'esquisse’s adaptable architecture scales effortlessly with your ambitions, providing critical insights that enhance your networking strategy and adapt to your expanding network.'
        },
        {
            expandedIcon: '/assets/images/icons/minus_dark.svg',
            initialIcon: '/assets/images/icons/plus_dark.svg',
            bgColor: 'var(--light-blue)',
            textColor: 'var(--secondary-color)',
            title: 'Insightful Real-Time Analytics',
            content: 'Empower your networking decisions with cutting-edge, real-time analytics. esquisse transforms complex data into actionable insights, helping you identify trends, measure engagement, and refine your approach for maximum impact.'
        },
        {
            initialIcon: '/assets/images/icons/plus_white.svg',
            expandedIcon: '/assets/images/icons/minus_white.svg',
            bgColor: 'var(--primary-color)',
            textColor: 'white',
            title: 'Uncompromising Data Security',
            content: 'Rest assured, esquisse safeguards your data with robust, enterprise-grade security measures. Every interaction is protected, giving you the confidence to build meaningful relationships within a secure, trusted environment.'
        }
    ];

    const handleButtonClick = (index) => {
        setExpandedIndex(index === expandedIndex ? 1 : index); 
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.cardWrapper}>
                {cardItems.map((item, index) => (
                    <div
                        className={`${styles.card} ${index === expandedIndex ? styles.expanded : ''}`}
                        style={{ backgroundColor: item.bgColor }}
                        key={index}
                        onClick={() => handleButtonClick(index)}
                    >
                        <h4 style={{ color: item.textColor }}>{item.title}</h4>
                        {index === expandedIndex && <p style={{ color: item.textColor }}>{item.content}</p>}
                        <button
                            style={{ borderColor: item.textColor }}
                            className={styles.button}
                        >
                            {index === expandedIndex ? <Image src={item.expandedIcon} width={32} height={32} /> : <Image src={item.initialIcon} width={32} height={32} />}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HoverableCards;