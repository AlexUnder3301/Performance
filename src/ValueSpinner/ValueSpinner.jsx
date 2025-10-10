import { useState, useRef, useCallback } from 'react';
import './style.css';

const ValueSpinner = ({ values = ['Значение 1', 'Значение 2', 'Значение 3'] }) => {
  const [currentValue, setCurrentValue] = useState(values[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const animationRef = useRef(null);
  const speedRef = useRef(0);

  const startSpinning = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    speedRef.current = 100; // начальная скорость (мс)
    let currentIndex = 0;

    const animate = () => {
      // Переходим к следующему значению
      currentIndex = (currentIndex + 1) % values.length;
      setCurrentValue(values[currentIndex]);

      // Постепенно увеличиваем интервал (замедляемся)
      if (speedRef.current < 500) {
        speedRef.current += 10;
      }

      // Если еще не достигли конечной скорости, продолжаем анимацию
      if (speedRef.current < 500) {
        animationRef.current = setTimeout(animate, speedRef.current);
      } else {
        // Финальное замедление и остановка
        setTimeout(() => {
          // Выбираем случайный финальный индекс
          const finalIndex = Math.floor(Math.random() * values.length);
          setCurrentValue(values[finalIndex]);
          setIsSpinning(false);
        }, 800);
      }
    };

    // Запускаем анимацию
    animationRef.current = setTimeout(animate, speedRef.current);
  }, [isSpinning, values]);


  return (
    <div className="value-spinner">
      <div className={`value-display ${isSpinning ? 'spinning' : ''}`}>
        {currentValue}
      </div>
      
      <button 
        className="spin-button" 
        onClick={startSpinning} 
        disabled={isSpinning}
      >
        {isSpinning ? 'Крутится...' : 'Запустить'}
      </button>
    </div>
  );
};

export default ValueSpinner;