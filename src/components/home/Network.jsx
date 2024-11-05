import Image from 'next/image';
import styles from './Network.module.css';
import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';

function Network() {
    const imageRef = useRef(null);
    const networkRef = useRef(null);
    const tl = gsap.timeline();

    const handleMouseEnter = () => {
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
        .to(networkRef.current, {
            backgroundColor: '#ffffff',
            duration: 0.1,
            position: "+=0" 
        });
    };

    const handleMouseLeave = () => {
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
        .to(networkRef.current, {
            backgroundColor: 'transparent',
            duration: 0.1,
            position: "+=0" 
        });
    };

    return (
        <div
            className={styles.network}
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            <h4>Step into the Future of <strong>Networking</strong></h4>
            <p>Are you ready to transform your business connections? Discover how esquisse can empower you to build relationships that fuel success and growth. With our cutting-edge platform, your next impactful connection is only a click away—reach out today and experience networking redefined.</p>
            <Link href='/contact' className={styles.button} ref={networkRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Image
                    ref={imageRef}
                    src={'/assets/images/icons/arrow-slant.svg'}
                    width={50}
                    height={50}
                    alt="Arrow Icon"
                    style={{ transition: 'opacity 0.5s ease' }} // For smooth transition
                />
            </Link>
        </div>
    );
}

export default Network;
