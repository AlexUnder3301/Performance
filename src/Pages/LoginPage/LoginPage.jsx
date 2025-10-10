import styles from './style.module.scss';
import { useNavigate } from 'react-router';

const LoginPage = ({ name, setName, id, setId }) => {
  const navigate = useNavigate();

  return (
    <div className={styles['login-container']}>
      <h3 className={styles['login-heading']}>
        Введите позываной и идентификатор
      </h3>
      <input
        type="text"
        placeholder="Позывной"
        className={styles['login-input']}
        value={name}
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Идентификатор"
        className={styles['login-input']}
        value={id}
        onChange={(e) => {
          e.preventDefault();
          setId(e.target.value);
        }}
      />

      <button
        className={styles['login-button']}
        onClick={(e) => {
          e.preventDefault();
          navigate('/case');
        }}
      >
        Подтвердить
      </button>
    </div>
  );
};

export default LoginPage;
