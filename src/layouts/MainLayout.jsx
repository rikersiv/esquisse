import { useState, useEffect, useRef } from "react";
import styles from "./MainLayout.module.css";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout({ children, isBannerVisible }) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerWrapperRef = useRef(null);
  const bgColor = isBannerVisible ? 'transparent' : 'var(--blue-background)';
  const logo = isBannerVisible ? 'esquisse_light.svg' : 'esquisse.svg';
  const banner = isBannerVisible; 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection Observer Entry:', entry);
        if (!entry.isIntersecting) {
          setIsFooterVisible(false);
        } else {
          setIsFooterVisible(true);
        }
      },
      { threshold: 0.9 } // Adjust this if needed
    );

    if (footerWrapperRef.current) {
      observer.observe(footerWrapperRef.current); 
    }

    return () => {
      if (footerWrapperRef.current) {
        observer.unobserve(footerWrapperRef.current);
      }
    };
  }, []); 

  return (
    <div className={styles.mainLayoutWrapper}>
      <div className={styles.contents}>
        <Header bgColor={bgColor} logo={logo} banner={banner} isFooterVisible={isFooterVisible} />
        <div>{children}</div>
        <div ref={footerWrapperRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;