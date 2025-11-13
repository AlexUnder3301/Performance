import { useMatch, useNavigate } from 'react-router';
import styles from './style.module.scss';
import { useEffect, useRef, useState } from 'react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const sequenceRef = useRef(null);
  const typeRef = useRef(null);

  const loadingSequence = [
    '  > ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ...',
    '  > ПОДКЛЮЧЕНИЕ К СЕРВЕРУ...',
    '  > ЗАГРУЗКА ДАННЫХ...',
    '  > ПРОВЕРКА БИОМЕТРИИ...',
    '  > ЗАПУСК ПРОТОКОЛА ПРОВЕРКИ...',
  ];

  const match = useMatch('/landing');
  console.log(match);

  useEffect(() => {
    sequenceRef.current = setInterval(() => {
      if (currentStep < loadingSequence.length) {
        let currentChar = 0;
        typeRef.current = setInterval(() => {
          if (currentChar < loadingSequence[currentStep].length - 1) {
            setDisplayText((prev) => {
              return prev + loadingSequence[currentStep][currentChar];
            });
            currentChar++;
          } else {
            setDisplayText((prev) => prev + '\n');
            setCurrentStep((prev) => prev + 1);
            clearInterval(typeRef.current);
          }
        }, 40);
      } else {
        clearInterval(typeRef.current);
        setIsLoading(false);
      }
    }, 2000);
    return () => clearInterval(sequenceRef.current);
  }, [currentStep]);

  return (
    <div className={styles['page-container']}>
      {!isLoading ? (
        <>
          <h1 className={styles['landing-heading']}>Добро пожаловать, агент</h1>
          <p>
            В данном курсе, вы пройдете несколько испытаний на профпригодность,
            по окончанию теста, будет вынесен вердикт, готовы ли вы секретному
            заданию.
          </p>
          <button
            className={styles['landing-button']}
            onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }}
          >
            Авторизация
          </button>
        </>
      ) : (
        <>
          <div className="load">{displayText}</div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
