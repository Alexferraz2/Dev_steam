import Button from '@/components/forms/button/button';
import styles from './gamecard.module.css'
import Image from 'next/image'

const GameCard = ( {image, name, type, price, onAdd}) => {
    return(
        <div className={styles.gamecard}>
            <Image className={styles.image} src={`/products/${image}`} alt={`Produto ${image}`} width={300} height={145}/>
            <div className={styles.info}>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.category}>{type}</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>{price}</h2>
                    <Button onClick={onAdd}>Adcionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}

export default GameCard;