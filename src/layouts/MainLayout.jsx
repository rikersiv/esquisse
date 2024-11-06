import { useState, useEffect, useRef } from "react";
import styles from "./MainLayout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MainLayout({ children, isBannerVisible, mainHomepage }) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerWrapperRef = useRef(null);
  const bgColor = isBannerVisible ? 'transparent' : 'var(--blue-background)';
  const logo = isBannerVisible ? 'esquisse_light.svg' : 'esquisse.svg';
  const banner = isBannerVisible;
  const homepage = mainHomepage;

  useEffect(() => {
    const handleVisibilityChange = (isVisible) => {
      setIsFooterVisible(isVisible);
    };

    const homeTrigger = ScrollTrigger.create({
      trigger: footerWrapperRef.current,
      start: 'top top', 
      onEnter: () => handleVisibilityChange(true), 
      onLeaveBack: () => handleVisibilityChange(false),
      toggleActions: 'play none none reverse',
    });
    return () => {
      homeTrigger.kill();
    };
  }, []);

  return (
    <div className={styles.mainLayoutWrapper}>
      <div className={styles.contents}>
          <Header bgColor={bgColor} logo={logo} banner={banner} isFooterVisible={isFooterVisible} homepage={mainHomepage} />
        <div>{children}</div>
        <div ref={footerWrapperRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;