import styles from "./Banner.module.css";

function Banner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <p>Your Portal to Effortless,<br/><strong>Impactful Connections</strong></p>
                <button className={styles.chat}>REACH<br/>OUT</button>
            </div>
        </div>
    );
}

export default Banner;