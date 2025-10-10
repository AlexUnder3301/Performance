import { useNavigate } from 'react-router';
import styles from './style.module.scss';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['page-container']}>
      <h1 className={styles['landing-heading']}>Добро пожаловать, агенты</h1>
      <p>
        В данном курсе, вы пройдете несколько испытаний на профпригодность, по
        окончанию теста, будет вынесен вердикт, готовы ли вы секретному заданию.
        Готовы присутупить?
      </p>
      <button
        className={styles['landing-button']}
        onClick={(e) => {
          e.preventDefault();
          navigate('/login');
        }}
      >
        Готов
      </button>
    </div>
  );
};

export default LandingPage;
