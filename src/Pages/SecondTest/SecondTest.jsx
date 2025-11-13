import styles from './style.module.scss';
import Fingerprint from '../../features/Fingerprint/Fingerprint';

const SecondTest = ({ isSmoked, setIsSmoked }) => {
  return (
    <div className={styles['test-container']}>
      <h1>Второе испытание</h1>
      {!isSmoked ? (
        <>
          <section>
            Поздравляем с прохождением второго испытания! Надеюсь у вас не
            заняло это много времени. Второе испытание будет немного легче. И по
            традиции, перед испытанием нужно дунуть.
          </section>
          <Fingerprint setIsSmoked={setIsSmoked} />
        </>
      ) : (
        <>
          <section>
            В первом испытании проверялись ваши умственные способности, в данном
            же испытании мы провери вашу память
          </section>
        </>
      )}
    </div>
  );
};

export default SecondTest;
