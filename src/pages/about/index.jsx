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
    const firstChildRef = useRef(null);
    const secondChildRef = useRef(null);
    const missionRef = useRef(null);
    const secondMissionRef = useRef(null);
    const visionRef = useRef(null);
    const secondVisionRef = useRef(null);

    const animateElement = (ref, options) => {
        gsap.fromTo(ref.current, options.from, options.to);
    };

    useEffect(() => {
        if (firstChildRef.current) {
            animateElement(firstChildRef, {
                from: { y: 500, opacity: 0 },
                to: { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
            });
        }

        if (secondChildRef.current) {
            animateElement(secondChildRef, {
                from: { y: 500, opacity: 0 },
                to: { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
            });
        }

        const button = document.querySelector(`.${styles.learnMore}`);
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

        const vidWrap = missionRef.current;
        const visionWrap = visionRef.current;
        const targetContainer = secondMissionRef.current;
        const targetVision = secondVisionRef.current;

        if (vidWrap && targetContainer) {
            const targetRect = targetContainer.getBoundingClientRect();
            const vidWrapRect = vidWrap.getBoundingClientRect();
    
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: vidWrap,
                    start: "top top",
                    end: "bottom center",
                    toggleActions: 'play none none none',
                }
            });
    
            tl.to(vidWrap, {
                x: targetRect.left - vidWrapRect.left,
                y: '200px',
                width: "270px",
                height: "400px",
                zIndex: -1,
                duration: 0.5,
            })
            .to(vidWrap, {
                opacity: 0, 
                duration: 1, 
                onComplete: () => {
                    vidWrap.style.display = 'none'; 
                }
            });
        }
    
        if (visionWrap && targetVision) {
            const targetVisionRect = targetVision.getBoundingClientRect();
            const visionWrapRect = visionWrap.getBoundingClientRect();
    
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: visionWrap,
                    start: "top top",
                    end: "bottom bottom",
                    toggleActions: 'play none none none',
                }
            });
    
            tl.to(visionWrap, {
                x: targetVisionRect.left - visionWrapRect.left,
                y: 0,
                width: "400px",
                height: "300px",
                zIndex: "-1",
                duration: 0.5,
                delay: 0.1
            })
            .to(visionWrap, {
                opacity: 0, 
                duration: 1, 
                onComplete: () => {
                    visionWrap.style.display = 'none';
                }
            });
        }


        return () => {
            button.removeEventListener("mouseenter", createRippleEffect);
        };
    }, []);

    return (
        <MainLayout>
            <div className={styles.children}>
                <div className={styles.wrapper} ref={firstChildRef} style={{ opacity: 0}}>
                    <div className={`${styles.flex} ${styles.block}`}>
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

            <div ref={missionRef} className={`${styles.vidWrapper}`}>
                <video autoPlay loop muted>
                    <source src={'/assets/videos/aboutus_vision.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={styles.children}>
                <div className={styles.wrapper}>
                    <div className={`${styles.flex} ${styles.mediaWrapper}`}>
                        <video ref={secondMissionRef} autoPlay loop muted style={{ maxWidth: '270px' }}>
                            <source src={'/assets/videos/aboutus_vision.mp4'} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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

            <div ref={visionRef} className={`${styles.visionWrapper}`}>
                <video autoPlay loop muted style={{ width: '100%', marginBottom: '1 .7em' }}>
                    <source src={'/assets/videos/aboutus_mission.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={styles.children}>
                <div className={styles.wrapper} style={{paddingTop: 0}}>
                    <div className={styles.flex}>
                        <div className={styles.sideText} style={{ marginLeft: 0, marginRight: '5em' }}>
                            <h1>Our Vision</h1>
                            <p>esquisse envisions a future where technology seamlessly enhances human connection, creating opportunities for relationships that transcend the ordinary. We aspire to be an essential platform that fosters profound, meaningful connections—making networking more intuitive, impactful, and resonant in every facet of our users' lives.</p>
                        </div>

                        <div className={styles.horizontalDivWrapper} style={{ maxWidth: '400px' }}>
                            <video ref={secondVisionRef} autoPlay loop muted style={{ width: '100%'}}>
                                <source src={'/assets/videos/aboutus_mission.mp4'} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className={styles.imgWrapper} style={{ paddingTop: '1 .7em' }}>
                                <Image src={'/assets/images/about_img6.svg'} width={100} height={56}/>
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