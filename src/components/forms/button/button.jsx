import styles from './button.module.css'


const Button = ({children, fullwidth, ...props}) => {
    return(
        <button className={`${styles.button} ${fullwidth && styles.fullwidth}`} {...props} >{children}</button>
    )
}



export default Button;