import styles from './style.module.scss';

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <span>
        Министерство <br /> Бледности
      </span>
      <img
        src="public/assets/mb-logo.png"
        alt=""
        className={styles['header-container-logo']}
      />
    </div>
  );
};

export default Header;
