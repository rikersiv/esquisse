import { useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import { gsap } from "gsap";

function Banner({ videoPath, bgPath, children, isContactPage }) {
    const wrapperRef = useRef(null);
    const innerElementsRef = useRef(null);

    useEffect(() => {
        if (isContactPage) {
            // Animate the wrapper on mount
            gsap.fromTo(wrapperRef.current, 
                { opacity: 0 }, 
                { opacity: 1, duration: 1, ease: "ease" }
            );
        } else {
            const handleMouseEnter = () => {
                gsap.to(innerElementsRef.current, {
                    opacity: 1,
                    duration: 1.5,
                    ease: "ease"
                });
            };

            wrapperRef.current.addEventListener("mouseenter", handleMouseEnter);

            // Cleanup event listener on unmount
            return () => {
                wrapperRef.current.removeEventListener("mouseenter", handleMouseEnter);
            };
        }
    }, [isContactPage]);

    return (
        <div ref={wrapperRef} className={styles.wrapper} style={{ opacity: isContactPage ? 0 : 1 }}>
            {videoPath ? (
                <video className={styles.backgroundVideo} autoPlay loop muted>
                    <source src={videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div className={styles.backgroundImage} style={{ backgroundImage: bgPath }} />
            )}
            <div ref={innerElementsRef} className={styles.innerWrapper} style={{ opacity: isContactPage ? 1 : 0 }}>
                {children}
            </div>
        </div>
    );
}

export default Banner;