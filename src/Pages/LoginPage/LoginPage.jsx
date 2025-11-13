import styles from './style.module.scss';
import { useNavigate } from 'react-router';
import { useEffect, useRef, useState } from 'react';

const LoginPage = ({ name, setName, id, setId }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      const loadingMessage = '  > ЗАГРУЗКА ЛИЧНОГО ДЕЛА...';
      let currentChar = 0;
      intervalRef.current = setInterval(() => {
        if (currentChar < loadingMessage.length - 1) {
          setDisplayText((prev) => prev + loadingMessage[currentChar]);
          currentChar++;
        } else {
          clearInterval(intervalRef.current);
        }
      }, 40);
    }

    return () => clearInterval(intervalRef.current);
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id === 'swag' || id === 'froy') {
      setIsLoading(true);
      setTimeout(() => {
        navigate('/case');
      }, 2000);
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 500);
    }
  };

  return (
    <>
      {!isLoading ? (
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
            className={`${styles['login-input']} ${error ? styles['error'] : ''}`}
            value={id}
            onChange={(e) => {
              e.preventDefault();
              setId(e.target.value);
            }}
          />

          <button className={styles['login-button']} onClick={handleSubmit}>
            Подтвердить
          </button>
        </div>
      ) : (
        <div className="load">{displayText}</div>
      )}
    </>
  );
};

export default LoginPage;
