import { memo, useMemo } from 'react';
import type { CounterState } from '../../types';
import './Counter.scss';

interface CounterProps {
  counterState: CounterState;
}

const Counter = memo<CounterProps>(({ counterState }) => {
  const { count, isAnimating } = counterState;
  
  const isZero = useMemo(() => count === 0, [count]);
  
  const counterClasses = useMemo(() => {
    const baseClasses = 'counter__value';
    const zeroClass = isZero ? 'counter__value--zero' : '';
    const animateClass = isAnimating ? 'counter__value--animate' : '';
    return `${baseClasses} ${zeroClass} ${animateClass}`.trim();
  }, [isZero, isAnimating]);

  return (
    <div className="counter">
      <div className="counter__display">
        <span className="counter__label">Counter:</span>
        <span 
          className={counterClasses}
          aria-live="polite"
          aria-label={`Counter value is ${count}`}
        >
          {count}
        </span>
      </div>
    </div>
  );
});

Counter.displayName = 'Counter';

export default Counter;
