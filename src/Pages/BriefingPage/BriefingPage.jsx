import { useNavigate } from 'react-router';
import styles from './style.module.scss';
import { useState, useRef, useEffect } from 'react';

const BriefingPage = ({ name }) => {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      const loadingMessage = '  > ЗАГРУЗКА ИСПЫТАНИЯ...';
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

  return (
    <>
      {!isLoading ? (
        <div className={styles['briefing-container']}>
          <h1 className={styles['briefing-heading']}>
            Добро пожаловать, Агент {name}
          </h1>
          <section className={styles['briefing-text']}>
            Теперь, после подтверждения личности, кратко введем вас в курс дела.
            Над Министерством повисла большая угроза в виде одного набирающего
            обороты Мексиканского картеля. Они называют себя 'Heraldos De
            Palidez', что переводится как Предвестники Бледности. Как можно
            догадаться по названию, они хотят позариться на территорию влияния
            Министерства. Вы можете подумать, что какой-то Мексаканский картель
            не помеха для всего Министерства, но у нас другие взгляды. Мы
            уничтожаем подобные начинания еще в зародыше, и именно для этого вы
            нам и нужны. Если вы пройдете сегодняшние тесты, мы отправим вас на
            это задание с еще 1 напарником, все кандидаты должны пройти данные
            тесты, а мы уже выберем лучших и сообщим о результатах. Вся
            дальнейшая информация будет раскрыта после прохождения тестов, если
            вы согласны на участие в данной операции, прошу приступать.
          </section>
          <button
            className={styles['briefing-button']}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate('/firsttest');
              }, 2000);
            }}
          >
            Начать
          </button>
        </div>
      ) : (
        <div className="load">{displayText}</div>
      )}
    </>
  );
};

export default BriefingPage;
