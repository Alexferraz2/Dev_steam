import Button from '@/components/forms/button/button';
import styles from './salecard.module.css'
import Image from 'next/image'

const SaleCard = ({ image, discount, fullprice, discountprice, onAdd}) => {
    return(
       
            <div className={styles.salecard}>
                <Image src={`/products/${image}`} width={250} height={350} />
                <div className={styles.info}>
                    <h3 className={styles.title}>oferta Exlusiva</h3>
                    <div className={styles.pricecard}>
                        <div className={styles.percent}>{discount}</div>
                        <div className={styles.price}>
                            <p className={styles.fullprice}>{fullprice}</p>
                            <h4 className={styles.discountprice}>{discountprice}</h4>
                        </div>
                        
                    </div>
                    <Button fullwidth onClick={onAdd}>Adcionar ao carrinho</Button>
                </div>
                
            </div>
            
        
    )
}


SaleCard.defaultProps = {
    image: "The-Last-of-Us-Part-1.webp",
    discount: "20%",
    fullprice: "$309,99",
    discountprice: "$247,99"

}

export default SaleCard;