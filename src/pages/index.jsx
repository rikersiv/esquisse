import React, { useState, useEffect, useRef } from "react";
import Banner from "@/components/home/Banner";
import HoverableCards from "@/components/home/hoverableCards";
import MainLayout from "@/layouts/MainLayout";
import styles from './index.module.css';
import Image from "next/image";
import Marquee from "@/components/home/Marquee";
import Network from "@/components/home/Network";

function Home() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const homeWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsBannerVisible(true);
        } else {
          setIsBannerVisible(false);
        }
      },
      { threshold: 0.07 }
    );

    if (homeWrapperRef.current) {
      observer.observe(homeWrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  return (
    <MainLayout isBannerVisible={isBannerVisible}>
      <Banner bgPath="url('/assets/images/background_banner.svg')">
        <p>Your Portal to Effortless,<br /><strong>Impactful Connections</strong></p>
        <button className={styles.chat}>REACH<br />OUT</button>
      </Banner>
      <div ref={homeWrapperRef} className={styles.homeWrapper}>
        <div className={styles.precision}>
          <h1><strong>Precision Driven</strong> Connectivity Aligned<br />with Your <strong>Business Goals</strong></h1>
          <div className={styles.cardWrapper}>
            {cardItems.map((item, index) => (
              <div className={styles.card} key={index}>
                <Image src={item.src} width={30} height={30} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.process}>
          <div className={styles.title}>
            <h1>How It Works: <strong>Seamless Connections, Effortlessly Achieved</strong></h1>
          </div>
          <div className={styles.gridWrapper}>
            <div className={styles.gridCard}>
              <div>
                <h4>Intelligent Matching Powered by Advanced Algorithms</h4>
                <p>Driven by sophisticated AI, esquisse rapidly learns your unique preferences and objectives to connect you with ideal partners, clients, and collaborators in seconds. With every interaction, the platform fine-tunes its recommendations, ensuring that each connection aligns with your strategic goals.</p>
              </div>
            </div>
            <div className={styles.image}>
              <Image src={'/assets/images/image1.svg'} width={100} height={60} />
            </div>
            <div className={styles.image}><Image src={'/assets/images/image2.svg'} width={100} height={60} /></div>
            <div className={styles.gridCard}>
              <div>
                <h4>Personalized, Real-Time Suggestions</h4>
                <p>Experience networking tailored precisely to your needs with real-time suggestions that evolve as you do. Our platform delivers data-driven insights, guiding you toward high-impact connections while optimizing your approach with actionable analytics.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.efficiency}>
          <h1>Where <strong>Efficiency</strong> Meets <strong>Innovation</strong></h1>
          <p>esquisse is built for scalability and security. Whether you’re a growing startup or an established company, we provide tools that evolve with your business. Features That Set Us Apart.</p>
        </div>

        <HoverableCards />

        <div className={styles.centerTitle}>
          <h1>What Our Users Say: <strong>Transformative Experiences, Real Results</strong></h1>
        </div>

        <div className={styles.marqueeIndex}>
          <Marquee />
        </div>
        <Network />
      </div>
    </MainLayout>
  );
}

export default Home;
