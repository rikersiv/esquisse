import Image from 'next/image';
import styles from './Cards.module.css';

function Cards() {
    const cardItems = [
        {
            icon: '/assets/images/icons/setting.svg',
            title: 'Efficiency',
            content: 'Our platform accelerates the networking process, making each connection faster and more productive than ever.'
        },
        {
            icon: '/assets/images/icons/document-security.svg',
            title: 'Security',
            content: 'Protecting your privacy and data is our top priority, ensuring your information is always safe and secure.'
        },
        {
            icon: '/assets/images/icons/hand-phone.svg',
            title: 'User-Friendly',
            content: 'Designed with simplicity at its core, esquisse is intuitive and accessible, making powerful networking easy for everyone.'
        },
    ];
    return (
        <>
            {cardItems.map((item, index) => (
            <div key={index} className={styles.card}>
                <Image src={item.icon} width={20} height={20} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
            </div>
        ))}
        </>
        
        
    )
}

export default Cards;