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
    const missionRef = useRef(null);
    const secondMissionRef = useRef(null);
    const visionRef = useRef(null);
    const secondVisionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(childRef.current, { y: 500, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 });

        const missionScrollTrigger = ScrollTrigger.create({
            trigger: missionRef.current,
            start: "center center",
            end: "bottom 99.9%",
            toggleActions: "play none none none",
            onLeave: () => {
                console.log("Leaving mission section, setting overflow to auto");
                document.body.style.overflow = 'auto';
                const missionElement = missionRef.current;
                const targetContainer = secondMissionRef.current;

                const targetRect = targetContainer.getBoundingClientRect();
                const missionRect = missionElement.getBoundingClientRect();

                const tl = gsap.timeline();
                tl.to(missionElement, {
                    x: targetRect.left - missionRect.left,
                    y: targetRect.top - missionRect.top,
                    scale: 0.3, 
                    duration: 1,
                    transformOrigin: "top left",
                    onComplete: () => {
                        gsap.set(missionRef, { clearProps: "all" });
                        targetContainer.appendChild(missionElement);
                        gsap.set(missionRef, { clearProps: 'transform' })
                        const removableDiv = document.getElementById('removable');
                        if (removableDiv) {
                            removableDiv.remove();
                        }
                    }
                });
            },
        });

        const visionScrollTrigger = ScrollTrigger.create({
            trigger: visionRef.current,
            start: "center bottom",
            end: "bottom 99.9%",
            toggleActions: "play none none none",
            onLeave: () => {
                console.log("Leaving vision section, setting overflow to auto");
                document.body.style.overflow = 'auto';
                const visionElement = visionRef.current;
                const targetContainer = secondVisionRef.current;

                const targetRect = targetContainer.getBoundingClientRect();
                const visionRect = visionElement.getBoundingClientRect();

                const tl = gsap.timeline();
                tl.to(visionElement, {
                    x: targetRect.left - visionRect.left, 
                    y: targetRect.top - visionRect.top, 
                    scale: 0.1, 
                    duration: 1,
                    transformOrigin: "top left", 
                    onComplete: () => {
                        gsap.set(visionRef, { clearProps: "all" });
                        gsap.set(visionElement, { opacity: 0 }); // Set initial opacity to 0
                        targetContainer.appendChild(visionElement);
                        gsap.to(visionElement, {
                            opacity: 1,
                            duration: 0.5,
                            onComplete: () => {
                                const removableDiv = document.getElementById('removable1');
                                if (removableDiv) {
                                    removableDiv.remove();
                                }
                            }
                        });
                    }
                });
            },
        });

        return () => {
            missionScrollTrigger.kill();
            visionScrollTrigger.kill();
        };
    }, []);

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
            <div id='removable' style={{ zIndex: 101, position: 'absolute' }}>
                <video ref={missionRef} autoPlay loop muted style={{ width: '100%' }}>
                    <source src={'/assets/videos/aboutus_vision.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={styles.children}>
                <div className={styles.wrapper} style={{ padding: 0 }}>
                    <div className={`${styles.flex} ${styles.mediaWrapper}`}>
                        <div ref={secondMissionRef} className={`${styles.vidWrapper} ${styles.imgConditional}`}></div>
                        <div className={styles.imgWrapper}>
                            <Image className={styles.innerTextImg} src={'/assets/images/about_img4.svg'} width={58} height={100} />
                            <div className={styles.innerText}>
                                <Image src={'/assets/images/icons/handshake.svg'} width={20} height={20} />
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
            <div id='removable1' style={{ zIndex: 101, position: 'absolute' }}>
                <video ref={visionRef} autoPlay loop muted style={{ width: '100%' }}>
                    <source src={'/assets/videos/aboutus_mission.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={styles.children}>
                <div className={styles.wrapper} style={{ padding: 0 }}>
                    <div className={styles.flex}>
                        <div className={styles.sideText} style={{ marginLeft: 0, marginRight: '5em' }}>
                            <h1>Our Vision</h1>
                            <p>esquisse envisions a future where technology seamlessly enhances human connection, creating opportunities for relationships that transcend the ordinary. We aspire to be an essential platform that fosters profound, meaningful connections—making networking more intuitive, impactful, and resonant in every facet of our users&apos; lives.</p>
                        </div>
                        <div className={styles.horizontalDivWrapper} style={{ maxWidth: '400px' }}>
                            <div ref={secondVisionRef}></div>
                            <div className={styles.imgWrapper}>
                                <Image src={'/assets/images/about_img6.svg'} width={100} height={56} />
                                <div className={styles.horizontalText}>
                                    <h1>60%</h1>
                                    <p>Users report a 60% increase in professional and personal opportunities through meaningful connections.</p>
                                </div>
                            </div>
                        </div>
                    </ div>
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