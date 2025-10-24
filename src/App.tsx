import React from 'react';
import './App.scss';
import Counter from './components/Counter/Counter';
import StatusIndicator from './components/StatusIndicator/StatusIndicator';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { useCounter } from './hooks/useCounter';
import { useChuckNorrisJoke } from './hooks/useChuckNorrisJoke';
import { logger } from './utils/logger';

const LazyJokeDisplay = React.lazy(() => import('./components/LazyJokeDisplay/LazyJokeDisplay'));

function App() {
  const { counterState, increment, reset } = useCounter(0);
  const { jokeState, fetchJoke, clearJoke } = useChuckNorrisJoke();

  const handleIncrement = async () => {
    logger.info('Counter incremented', { count: counterState.count + 1 });
    increment();
    await fetchJoke();
  };

  const handleReset = () => {
    logger.info('Counter reset');
    reset();
    clearJoke();
  };

  const incrementButtonText = jokeState.isLoading ? 'Loading...' : 'Increment';

  return (
    <ErrorBoundary>
      <div className="app">
        <h1>Counter App</h1>
        
        <Counter counterState={counterState} />
        <StatusIndicator counterState={counterState} />
        
        <ButtonContainer
          onIncrement={handleIncrement}
          onReset={handleReset}
          isIncrementDisabled={counterState.isAnimating || jokeState.isLoading}
          isResetDisabled={counterState.isAnimating}
          incrementButtonText={incrementButtonText}
        />

        <LazyJokeDisplay jokeState={jokeState} />
      </div>
    </ErrorBoundary>
  );
}

export default App