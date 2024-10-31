import Image from 'next/image';
import styles from './Network.module.css';
function Network() {
    return (
        <div className={styles.network}>
            <h4>Step into the Future of <strong>Networking</strong></h4>
            <p>Are you ready to transform your business connections? Discover how esquisse can empower you to build relationships that fuel success and growth. With our cutting-edge platform, your next impactful connection is only a click away—reach out today and experience networking redefined.</p>
            <button className={styles.button}>
                <Image src={'/assets/images/icons/arrow-slant.svg'} width={50} height={50}/>
            </button>
        </div>
    )
}

export default Network;