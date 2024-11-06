import React, { useState, useEffect, useRef } from "react";
import Banner from "@/components/home/Banner";
import HoverableCards from "@/components/home/hoverableCards";
import MainLayout from "@/layouts/MainLayout";
import styles from './index.module.css';
import Image from "next/image";
import Marquee from "@/components/home/Marquee";
import Network from "@/components/home/Network";
import { gsap } from "gsap";
import Precision from "@/components/home/Precision";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Process from "@/components/home/Process";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [ishomePage, setIshomePage] = useState(false);
  const homeWrapperRef = useRef(null);
  const efficiencyRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = (isVisible) => {
      setIsBannerVisible(isVisible);
    };

    const homeTrigger = ScrollTrigger.create({
      trigger: homeWrapperRef.current,
      start: 'top top', 
      onEnter: () => handleVisibilityChange(false), 
      onLeave: () => handleVisibilityChange(false), 
      onEnterBack: () => handleVisibilityChange(false),
      onLeaveBack: () => handleVisibilityChange(true),
      toggleActions: 'play none none reverse',
    });
    return () => {
      homeTrigger.kill();
    };
  }, []);

  useEffect(() => {
    const button = document.querySelector(`.${styles.chat}`);

    const createRippleEffect = () => {
      const tl = gsap.timeline();

      tl.to(button, {
        boxShadow: "0 0 0 20px rgba(59, 142, 204, 0.61), 0 0 0 0px rgba(59, 142, 204, 0)",
        duration: 0.4,
        ease: "ease"
      })
        .to(button, {
          boxShadow: "0 0 0 20px rgba(59, 142, 204, 0.3), 0 0 0 40px rgba(59, 142, 204, 0.28)",
          duration: 0.2,
          ease: "ease"
        })
        .to(button, {
          boxShadow: "0 0 0 20px rgba(59, 142, 204, 0), 0 0 0 40px rgba(59, 142, 204, 0.28)",
          duration: 0.4,
          ease: "ease"
        })
        .to(button, {
          boxShadow: "0 0 0 0px rgba(59, 142, 204, 0), 0 0 0 0px rgba(59, 142, 204, 0)",
          duration: 0.3,
          ease: "ease"
        });
    };

    button.addEventListener("mouseenter", createRippleEffect);

    return () => {
      button.removeEventListener("mouseenter", createRippleEffect);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: efficiencyRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
        },
    });

    tl.fromTo(efficiencyRef.current, 
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1.5,
            ease: "ease",
        }, "<"); 
        return () => {
          tl.kill();
        };
  }, []);

  return (
    <MainLayout isBannerVisible={isBannerVisible} mainHomepage={ishomePage}>
      <Banner videoPath="/assets/videos/homepage_herobanner.mp4" setIshomePage={setIshomePage}>
        <p>Your Portal to Effortless,<br /><strong>Impactful Connections</strong></p>
        <button className={styles.chat}>REACH<br />OUT</button>
      </Banner>
 <div className={styles.children}>
        <div ref={homeWrapperRef} className={styles.homeWrapper}>

          <Precision />
          <Process />

          <div ref={efficiencyRef} style={{opacity: 0}}>
            <div className={styles.efficiency}>
              <h1>Where <strong>Efficiency</strong> Meets <strong>Innovation</strong></h1>
              <p>esquisse is built for scalability and security. Whether you’re a growing startup or an established company, we provide tools that evolve with your business. Features That Set Us Apart.</p>
            </div>

            <HoverableCards />
          </div>

          <div className={styles.centerTitle}>
            <h1>What Our Users Say: <strong>Transformative Experiences, Real Results</strong></h1>
          </div>
        </div>
      </div>

      <div className={styles.marqueeIndex}>
        <Marquee />
      </div>
      <div className={styles.children}>
        <div className={styles.homeWrapper}>
          <Network />
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;