import CartMenu from '@/components/cartmenu/cartmenu'
import styles from './cartButton.module.css'
import { BsCart4} from 'react-icons/bs'
import { useState } from 'react'

const CartButton = ( {cart, onRemove }) => {
    const [open, setOpen] = useState(false)
    
    return (
        <div>
            <BsCart4 
                size={40} 
                className={styles.icon}
                onClick={() => {setOpen(!open)}}
            />
            {cart.length > 0 && <p className={styles.cartLength}>{cart.length}</p>}
            
            {open && <CartMenu cart={cart} onRemove={onRemove}/>}
            
        </div>
    )
}

export default CartButton;