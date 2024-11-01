import styles from "./Banner.module.css";

function Banner({ bgPath, children }) {
    return (
        <div className={styles.wrapper} style={{backgroundImage: bgPath}}>
            <div className={styles.innerWrapper}>
                {children}
            </div>
        </div>
    );
}

export default Banner;