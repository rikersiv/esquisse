import MainLayout from '@/layouts/MainLayout';
import styles from './index.module.css';
import Image from 'next/image';
import Network from '@/components/home/Network';
import Cards from '@/components/about/Cards';
import CardGrid from '@/components/about/CardGrid';
import Link from 'next/link';

function About() {
    return (
        <MainLayout>
            <div className={styles.wrapper}>
                <div className={styles.flex}>
                    <h1 className={styles.title}>Connecting the<br /><strong>Dots for Success</strong></h1>
                    <p>esquisse is a pioneering software solution designed to redefine professional networking through scientifically-backed, data-driven connections. Built to go beyond conventional networking, esquisse applies advanced analytics and behavioral insights to foster relationships based on genuine alignment, shared values, and strategic goals.</p>
                </div>

                <div className={styles.flex}>
                    <div className={styles.imgWrapper}>
                        <Image src={'/assets/images/about_img1.svg'} width={100} height={56} />
                        <button className={styles.learnMore}>LEARN<br />MORE</button>
                    </div>
                    <div className={styles.imgWrapper}>
                        <Image src={'/assets/images/about_img2.svg'} width={58} height={100} />
                        <div>
                            <h1>98%</h1>
                            <p>achieves accuracy in aligning users based on values and goals.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.flex}>
                    <div className={styles.imgWrapper}>
                        <Image src={'/assets/images/about_img3.svg'} width={100} height={56} />
                    </div>
                    <div className={styles.imgWrapper}>
                        <Image src={'/assets/images/about_img4.svg'} width={58} height={100} />
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

                <div className={styles.flex}>
                    <div className={styles.sideText} style={{ marginLeft: 0, marginRight: '5em' }}>
                        <h1>Our Vision</h1>
                        <p>esquisse envisions a future where technology seamlessly enhances human connection, creating opportunities for relationships that transcend the ordinary. We aspire to be an essential platform that fosters profound, meaningful connections—making networking more intuitive, impactful, and resonant in every facet of our users' lives.</p>
                    </div>
                    <div className={styles.imgWrapper}>
                        <Image src={'/assets/images/about_img5.svg'} width={100} height={56} />
                        <Image src={'/assets/images/about_img6.svg'} width={100} height={56} style={{ marginTop: '1.5em' }} />
                        <div className={styles.horizontalText}>
                            <h1>60%</h1>
                            <p>Users report a 60% increase in professional and personal opportunities through meaningful connections.</p>
                            
                        </div>
                    </div>
                </div>

                <div className={styles.flex}>
                    <h1 className={styles.title}>Join Us on a Journey to<br /><strong>Redefine Global Connection</strong></h1>
                    <Link href={'/contact'} className={styles.joinUs}>JOIN US !</Link>
                </div>

                <div className={styles.flex}>
                    <Cards/>
                </div>
                <CardGrid/>
                <Network />
            </div>
        </MainLayout>
    )
}

export default About;