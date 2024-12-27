import styles from './input.module.css';
import Search from './search/Search';

const Input = ({ fullwidth, placeholder, value, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        className={`${styles.input} ${fullwidth && styles.fullwidth}`}
        placeholder={placeholder}
        value={value} // Usa o valor controlado
        onChange={onChange} // Chama o evento de mudança do pai
      />
      <Search value={value} />
    </div>
  );
};

export default Input;
