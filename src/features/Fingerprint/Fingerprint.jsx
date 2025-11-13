import styles from './style.module.scss';
import { useState, useEffect, useRef } from 'react';

const Fingerprint = ({ setIsSmoked }) => {
  const [holdTime, setHoldTime] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const holdRef = useRef();
  const [displayText, setDisplayText] = useState('Приложите палец');

  const handleTouchStart = () => {
    setDisplayText('Держите');
    setIsHolding(true);
  };

  const handleTouchEnd = () => {
    setHoldTime(0);
    setIsHolding(false);
    if (holdTime < 3000) {
      setDisplayText('Вы держали палец слишком мало, приложите снова');
    } else {
      setIsSmoked(true);
    }
  };

  useEffect(() => {
    if (isHolding) {
      holdRef.current = setInterval(() => {
        setHoldTime((prev) => {
          if (prev >= 3000) {
            setDisplayText('Отпустите');
          }
          return prev + 100;
        });
      }, 100);
    } else {
      if (holdRef.current) {
        clearInterval(holdRef.current);
      }
    }
    return () => clearInterval(holdRef.current);
  }, [isHolding]);

  return (
    <div className={styles['fingerpint-container']}>
      <h3 className={styles['result']}>{displayText}</h3>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={styles['fingerprint']}
      ></div>
    </div>
  );
};

export default Fingerprint;
