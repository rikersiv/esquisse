import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './hoverableCards.module.css';

function HoverableCards() {
    // Set the initial expanded index to 1 for the middle card
    const [expandedIndex, setExpandedIndex] = useState(1); 
    const [isExpansionComplete, setIsExpansionComplete] = useState(true); // Initially set to true since the middle card is open

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
        if (index === expandedIndex) {
            // If the same index is clicked, collapse it
            setIsExpansionComplete(false);
            setExpandedIndex(-1); // Collapse
        } else {
            // Expand the new index
            setExpandedIndex(index);
            setIsExpansionComplete(false); // Reset completion state

            // Set a timeout to update the completion state after the expansion animation
            setTimeout(() => {
                setIsExpansionComplete(true);
            }, 300); // Adjust this duration to match your CSS transition duration
        }
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
                        {index === expandedIndex && isExpansionComplete && (
                            <p style={{ color: item.textColor }}>{item.content}</p>
                        )}
                        <button
                            style={{ borderColor: item.textColor }}
                            className={styles.button}
                        >
                            {index === expandedIndex ? (
                                <Image src={item.expandedIcon} width={32} height={32} />
                            ) : (
                                <Image src={item.initialIcon} width={32} height={32} />
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HoverableCards;