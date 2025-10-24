import { useState, useCallback } from 'react';
import type { JokeState } from '../types';
import { fetchChuckNorrisJoke } from '../utils/api';

export const useChuckNorrisJoke = () => {
  const [joke, setJoke] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchJoke = useCallback(async () => {
    try {
      setIsLoading(true);
      const jokeText = await fetchChuckNorrisJoke();
      setJoke(jokeText);
    } catch (error) {
      setJoke(error instanceof Error ? error.message : 'Failed to fetch joke. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearJoke = useCallback(() => {
    setJoke('');
  }, []);

  const jokeState: JokeState = {
    joke,
    isLoading,
  };

  return {
    jokeState,
    fetchJoke,
    clearJoke,
  };
};
