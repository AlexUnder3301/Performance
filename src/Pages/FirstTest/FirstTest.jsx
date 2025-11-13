import { useState } from 'react';
import styles from './style.module.scss';
import { useNavigate } from 'react-router';
import Fingerprint from '../../features/Fingerprint/Fingerprint';

const FirstTest = ({ isSmoked, setIsSmoked }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (value === 'test') {
      navigate('/secondtest');
      setIsSmoked(false);
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 500);
    }
  };

  return (
    <div className={styles['test-container']}>
      <h1 className={styles['test-heading']}>Первое испытание</h1>
      {!isSmoked ? (
        <>
          <section>
            В данных испытаниях будут проверяться ваши умственные способности,
            устойчиваость к шмали, а также ваша работоспособность под накурку,
            поэтому перед началом, вам нужно дунуть. Сделайте тягу, не выдыхая
            приложите палец к сканеру отпечатка, и не отпускайте, пока не
            появится соотвествующая надпись.
          </section>
          <Fingerprint setIsSmoked={setIsSmoked} />
        </>
      ) : (
        <>
          <section>
            Отлично, первое испытание заключается в поиске и расшифровке шифра.
            По комнате, в которой вы находитесь разбросаны 6 листочков с частями
            шифра, вам необходимо их найти и расшифровать послание. Единственная
            подсказа, что у вас есть: Любимая температура Гая Юлия - это +3
          </section>
          <div className={styles['form-container']}>
            <input
              type="text"
              placeholder="Введите ответ"
              value={value}
              onChange={(e) => {
                e.preventDefault();
                setValue(e.target.value);
              }}
              className={`${error ? styles['error'] : ''}`}
            />

            <button onClick={handleClick}>Проверить</button>
          </div>
        </>
      )}
    </div>
  );
};

export default FirstTest;
