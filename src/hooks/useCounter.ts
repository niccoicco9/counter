import { useState, useCallback, useMemo, useRef } from 'react';
import type { CounterState } from '../types';
import { ANIMATION_DURATION } from '../utils/constants';

export const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const triggerAnimation = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setIsAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      timeoutRef.current = null;
    }, ANIMATION_DURATION);
  }, []);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
    triggerAnimation();
  }, [triggerAnimation]);

  const reset = useCallback(() => {
    setCount(initialValue);
    triggerAnimation();
  }, [initialValue, triggerAnimation]);

  const counterState: CounterState = useMemo(() => ({
    count,
    isAnimating,
  }), [count, isAnimating]);

  return {
    counterState,
    increment,
    reset,
  };
};
