import Logo from '@/components/logo/logo';
import styles from './navbar.module.css';
import Input from '../forms/imput/input';
import CartButton from '../forms/cartButton/cartButton';

const NavBar = ({ cart, onRemove, searchTerm, handleSearchTerm }) => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input
          placeholder="Buscar"
          fullwidth
          value={searchTerm} 
          onChange={handleSearchTerm} 
        />
      </div>
      <CartButton cart={cart} onRemove={onRemove} />
    </div>
  );
};

export default NavBar;
