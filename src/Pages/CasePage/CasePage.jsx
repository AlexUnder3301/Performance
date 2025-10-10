import styles from './style.module.scss';

const CasePage = ({ name, id }) => {
  return (
    <div className={styles['case-container']}>
      <h3 className={styles['case-heading']}>{`Агент ${name}`}</h3>
      <div className={styles['case-info']}>
        <img
          src={`public/assets/${id}.jpg`}
          alt=""
          className={styles['case-img']}
        />
        <section className={styles['case-text']}>
          <b>Возраст: 22 года</b> <br /> <b>Рост: ~177 см</b> <br />{' '}
          <b>Вес: ~70 кг</b> <br />
          <b>Характеристика:</b> <br />
          Агент {name} обладает неплохими навыками хапания, навыки оцениваются
          на 8/10. <br /> Агент бывал бледным, причем не раз, но Министерство
          простило ему эти проступки, хоть и оставило под наблюдением. Уровеннь
          актерской игры оценивается на 7/10. <br /> Раньше возникали большие
          проблемы с тренировками актерской игры с помощью ролплеев, но после
          того как его отчитали, начал относиться серьезнее. <br /> Опыта боевых
          столкновений мало, но тренировки на гладиадорских боях проходили
          регулярно. <br />
        </section>
      </div>
    </div>
  );
};

export default CasePage;
