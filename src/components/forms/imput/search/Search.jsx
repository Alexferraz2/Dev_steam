import { IoSearch } from 'react-icons/io5';
import styles from './busca.module.css';

const Search = ({ value }) => {
  return (
    <IoSearch
      className={styles.search}
      onClick={() => console.log('Valor buscado:', value)} // Exibe o valor ao clicar
    />
  );
};

export default Search;
