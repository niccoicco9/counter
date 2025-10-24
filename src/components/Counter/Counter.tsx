import React from 'react';
import type { CounterState } from '../../types';
import './Counter.css';

interface CounterProps {
  counterState: CounterState;
}

const Counter: React.FC<CounterProps> = ({ counterState }) => {
  const { count, isAnimating } = counterState;
  const isZero = count === 0;

  return (
    <div className="counter">
      <div className="counter__display">
        <span className="counter__label">Counter:</span>
        <span 
          className={`counter__value ${isZero ? 'counter__value--zero' : ''} ${isAnimating ? 'counter__value--animate' : ''}`}
          aria-live="polite"
          aria-label={`Counter value is ${count}`}
        >
          {count}
        </span>
      </div>
    </div>
  );
};

export default Counter;
