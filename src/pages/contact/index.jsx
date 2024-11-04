import Banner from "@/components/home/Banner";
import MainLayout from "@/layouts/MainLayout";
import styles from './index.module.css';
import Image from "next/image";


function Contact() {
    const autoResize = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };
    return (
        <MainLayout>
            <Banner bgPath="url('/assets/images/contact_bg.svg')">
                <p style={{marginTop:'auto', marginBottom:'-3rem'}}>Contact Us</p>
                <button className={styles.scroll}>SCROLL<br />DOWN</button>
            </Banner>

            <div className={styles.children}>
                <div className={styles.contactWrapper}>
                    <h1><strong>Enter</strong> the Vanguard of<br />Next-Generation Networking</h1>
                    <form>
                        <div className={styles.row}>
                            <input type="text" id="name" name="name" placeholder="Name"></input>
                            <input type="text" id="email" name="email" placeholder="Email"></input>
                        </div>
                        <div className={styles.row}>
                            <input type="text" id="phone_number" name="phone_number" placeholder="Phone Number"></input>
                            <input type="text" id="your_business" name="your_business" placeholder="Your Business"></input>
                        </div>
                        <div className={styles.messageWrapper}>
                            <label htmlFor="message">Message</label>
                            <textarea className={styles.message} id="message" name="message" onInput={autoResize}></textarea>
                        </div>

                        <button type="submit" className={styles.button}>
                            SEND
                            <div className={styles.image}>
                                <Image src={'/assets/images/icons/arrow-slant.svg'} width={25} height={25} />
                            </div>
                        </button>
                    </form>
                </div>
            </div>

        </MainLayout>


    )
}

export default Contact;