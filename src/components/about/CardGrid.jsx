import Image from 'next/image';
import styles from './CardGrid.module.css';
import parse from 'html-react-parser';

function CardGrid() {
    const cardItems = [
        {
            bgColor: 'var(--secondary-color)',
            title: '<strong>Streamlined</strong> Networking Built For <strong>Impact</strong>',
            tags: ['Seamless collaboration', 'Strategic relationship building', 'Scalable networking solutions']
        },
        {
            bgColor: 'var(--light-blue)',
            image: '/assets/images/about_img7.svg'
        },
        {
            bgColor: 'var(--light-blue)',
            image: '/assets/images/about_img8.svg'
        },
        {
            bgColor: 'var(--primary-color)',
            title: '<strong>Empowering</strong> Lasting Connections Through <strong>Advanced Technology</strong>',
            tags: ['AI-powered networking', 'Secure data networking', 'Data enhanced connections']
        },
        {
            bgColor: 'var(--secondary-color)',
            title: 'When <strong>Precision</strong> Meets Purpose in <strong>Networking</strong>',
            tags: ['Real-time connection insights', 'Precision-driven partnerships', 'Intelligent matchmaking technology']
        },
        {
            bgColor: 'var(--light-blue)',
            image: '/assets/images/about_img9.svg'
        },
    ];

    return (
        <div className={styles.wrapper}>
            {cardItems.map((item, index) => (
                <div key={index} className={styles.card} style={{ backgroundColor: item.bgColor }}>
                    {item.title && (
                        <div className={styles.innerCard}>
                            <h1>{parse(item.title)}</h1>

                            <div className={styles.tags}>
                                {item.tags && item.tags.map((tag, tagIndex) => (
                                    <p key={tagIndex}>{tag}</p>
                                ))}
                            </div>
                        </div>
                    )}
                    {item.image && (
                        <Image src={item.image} width={100} height={100} alt={`Image for ${item.title || 'item ' + (index + 1)}`} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default CardGrid;