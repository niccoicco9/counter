import { useState, useCallback } from 'react';
import type { CounterState } from '../types';
import { ANIMATION_DURATION } from '../utils/constants';

export const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
  }, []);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
    triggerAnimation();
  }, [triggerAnimation]);

  const reset = useCallback(() => {
    setCount(initialValue);
    triggerAnimation();
  }, [initialValue, triggerAnimation]);

  const counterState: CounterState = {
    count,
    isAnimating,
  };

  return {
    counterState,
    increment,
    reset,
  };
};
