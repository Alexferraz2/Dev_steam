import CartOption from '../cartoption/cartoption';
import styles from './cartmenu.module.css'

const CartMenu = ( { cart, onRemove }) => {

       
    return (
        <div className={styles.menu}>

            <div className={styles.options}>
                 {cart.length === 0 && <p>Nenhum produto no carrinho</p>}    

                {cart.map((cartInfo, pos) => 
                    <CartOption
                        image={cartInfo.image}
                        name={cartInfo.name}
                        price={cartInfo.price}
                        onRemove={() => onRemove(pos)}
                        key={`cartInfo${pos}`}
                    />
                )}
                
                
            </div>
            <div className={styles.priceline}>
                <h2>Total</h2>
                {cart.length === 0 && <h2 className={styles.price}>R$ 0.00</h2>}
                {cart.length > 0 && (
                    <h2 className={styles.price}>
                        {cart.reduce((acc, item) => acc + item.price, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </h2>
                )}
                
            </div>
            
        </div>
    )
}


export default CartMenu;