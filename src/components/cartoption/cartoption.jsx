import styles from './cartoption.module.css'
import Image from 'next/image';

const CartOption = ({ image, name, price, onRemove,}) => {
    return (
        <div className={styles.option}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={62} height={74}/>
            <div className={styles.info}>
                <h3 className={styles.title}>{name}</h3>
                <h3 className={styles.price}>R$ {price}</h3>
                <p className={styles.remove} onClick={onRemove}>Remover</p>
            </div>
        </div>
        
    )
}

export default CartOption;