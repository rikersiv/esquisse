import MainLayout from '@/layouts/MainLayout';
import styles from './index.module.css';
import Image from 'next/image';
import Network from '@/components/home/Network';
import Cards from '@/components/about/Cards';
import CardGrid from '@/components/about/CardGrid';
import Link from 'next/link';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const childRef = useRef(null);
    const videoRef = useRef(null);
    const secondVideoRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(childRef.current, { y: 500, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 });

        const scrollTrigger = ScrollTrigger.create({
            trigger: videoRef.current,
            start: "top top",
            end: "bottom center",
            toggleActions: "play none none none",
            onEnter: () => document.body.style.overflow = 'hidden',
            onLeaveBack: () => document.body.style.overflow = 'auto',
        });

        return () => {
            scrollTrigger.kill();
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleVideoClick = () => {
        const videoElement = videoRef.current;
        const targetContainer = secondVideoRef.current;

        targetContainer.appendChild(videoElement);
        const tl = gsap.timeline();

        tl.to(videoElement, {
            scale: 0.5,
            // x: 0,
            // y: 0,
            duration: 1,
            onComplete: () => {
                videoElement.style.width = '100%';
                videoElement.style.zIndex = 'auto';
                videoElement.style.position = 'unset';
                videoElement.style.transform = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    };

    return (
        <MainLayout>
            <div className={styles.children}>
                <div className={styles.wrapper} ref={childRef}>
                    <div className={styles.flex}>
                        <h1 className={styles.title}>Connecting the<br /><strong>Dots for Success</strong></h1>
                        <p>esquisse is a pioneering software solution designed to redefine professional networking through scientifically-backed, data-driven connections. Built to go beyond conventional networking, esquisse applies advanced analytics and behavioral insights to foster relationships based on genuine alignment, shared values, and strategic goals.</p>
                    </div>
                    <div className={`${styles.flex} ${styles.flex2}`}>
                        {[
                            {
                                src: '/assets/images/about_img1.svg',
                                buttonText: 'LEARN\nMORE',
                                width: 100,
                                height: 56,
                            },
                            {
                                src: '/assets/images/about_img2.svg',
                                text: '98%',
                                description: 'achieves accuracy in aligning users based on values and goals.',
                                width: 58,
                                height: 100,
                            }
                        ].map((item, index) => (
                            <div key={index} className={styles.imgWrapper}>
                                <Image src={item.src} width={item.width} height={item.height} />
                                {item.buttonText ? (
                                    <button className={styles.learnMore}>{item.buttonText}</button>
                                ) : (
                                    <div>
                                        <h1>{item.text}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ zIndex: 101, position: 'absolute' }}>
                <video ref={videoRef} autoPlay loop muted style={{ width: '100%' }} onClick={handleVideoClick}>
                    <source src={'/assets/videos/aboutus_vision.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={styles.children}>
                <div className={styles.wrapper}>
                    <div className={`${styles.flex} ${styles.mediaWrapper}`}>
                        <div ref={secondVideoRef} className={`${styles.vidWrapper} ${styles.imgConditional}`}></div>
                        <div className={styles.imgWrapper}>
                            <Image className={styles.innerTextImg} src={'/assets/images/about_img4.svg'} width={58} height={100} />
                            <div className={styles.innerText}>
                                <Image src={'/assets/images/icons/handshake.svg'} width={20}
                                    height={20} />
                                <p>95% of users report feeling a strong sense of trust and authenticity in connections made through esquisse.</p>
                            </div>
                        </div>
                        <div className={styles.sideText}>
                            <h1>Our Mission</h1>
                            <p>At esquisse, our mission is clear: to forge connections that truly matter. We’re dedicated to empowering our users to build relationships rooted in trust and authenticity, catalyzing both personal and professional growth. Through advanced technology, we elevate the quality of every connection, ensuring that each interaction adds value, purpose, and depth.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ zIndex: 101, position: 'absolute' }}>
                {/* <video autoPlay loop muted style={{ width: '100%' }} onClick={handleVideoClick}>
                    <source src={'/assets/videos/aboutus_mission.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
            </div>
            <div className={styles.children}>
                <div className={styles.wrapper}>
                    <div className={styles.flex}>
                        <div className={styles.sideText} style={{ marginLeft: 0, marginRight: '5em' }}>
                            <h1>Our Vision</h1>
                            <p>esquisse envisions a future where technology seamlessly enhances human connection, creating opportunities for relationships that transcend the ordinary. We aspire to be an essential platform that fosters profound, meaningful connections—making networking more intuitive, impactful, and resonant in every facet of our users' lives.</p>
                        </div>
                        <div className={styles.horizontalDivWrapper} style={{maxWidth: '400px'}}>
                            {/* <Image src={'/assets/images/about_img5.svg'} width={100} height={56} style={{ marginBottom: '1.5em' }} /> */}
                            <video autoPlay loop muted style={{ width: '100%', marginBottom: '1.5em' }} onClick={handleVideoClick}>
                                <source src={'/assets/videos/aboutus_mission.mp4'} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className={styles.imgWrapper}>
                                <Image src={'/assets/images/about_img6.svg'} width={100} height={56} />
                                <div className={styles.horizontalText}>
                                    <h1>60%</h1>
                                    <p>Users report a 60% increase in professional and personal opportunities through meaningful connections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <h1 className={styles.title}>Join Us on a Journey to<br /><strong>Redefine Global Connection</strong></h1>
                        <Link href={'/contact'} className={styles.joinUs}>JOIN US !</Link>
                    </div>
                    <div className={`${styles.flex} ${styles.block}`}>
                        <Cards />
                    </div>
                    <CardGrid />
                    <Network />
                </div>
            </div>
        </MainLayout>
    );
}

export default About;