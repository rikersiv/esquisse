import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from './Process.module.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const gridCardsData = [
  {
    type: 'gridCard',
    title: 'Intelligent Matching Powered by Advanced Algorithms',
    description: 'Driven by sophisticated AI, esquisse rapidly learns your unique preferences and objectives to connect you with ideal partners, clients, and collaborators in seconds. With every interaction, the platform fine-tunes its recommendations, ensuring that each connection aligns with your strategic goals.',
  },
  {
    type: 'image',
    src: '/assets/images/image1.svg',
  },
  {
    type: 'image',
    src: '/assets/images/image2.svg',
  },
  {
    type: 'gridCard',
    title: 'Personalized, Real-Time Suggestions',
    description: 'Experience networking tailored precisely to your needs with real-time suggestions that evolve as you do. Our platform delivers data-driven insights, guiding you toward high-impact connections while optimizing your approach with actionable analytics.',
  },
];

function Process() {
  const gridCardRefs = useRef([]);
  const processRef = useRef(null);
  const titleRef = useRef(null);
  const scrollTriggerRef = useRef(null); 

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 30%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          scrollTriggerRef.current = ScrollTrigger.create({ 
            trigger: processRef.current,
            start: "top 30%",
            toggleActions: "play none none reverse",
          });
        }
      }
    });

    gridCardRefs.current.forEach((el, index) => {
      if (el) {
        let startX;

        if (index === 0) {
          startX = -100; 
        } else if (index === 1) {
          startX = -200; 
        } else if (index === 2) {
          startX = 200; 
        } else if (index === 3) {
          startX = 100; 
        }

        tl.fromTo(el, 
          { x: startX, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1 },
          0 
        );
      }
    });

    tl.fromTo(titleRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1 },
      0 
    );

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill(); // Kill the specific scroll trigger instance
      }
    };
  }, []);

  return (
    <div className={styles.process} ref={processRef}>
      <div className={styles.title} ref={titleRef}>
        <h1>How It Works: <strong>Seamless Connections, Effortlessly Achieved</strong></h1>
      </div>
      <div className={styles.gridWrapper}>
        {gridCardsData.map((card, index) => {
          if (card.type === 'gridCard') {
            return (
              <div className={styles.gridCard} ref={el => (gridCardRefs.current[index] = el)} key={index}>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            );
          } else if (card.type === 'image') {
            return (
              <div className={styles.image} key={index}>
                <Image src={card.src} width={100} height={60} ref={el => (gridCardRefs.current[index] = el)} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Process;
