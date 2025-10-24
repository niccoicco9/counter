import './App.scss';
import Counter from './components/Counter/Counter';
import StatusIndicator from './components/StatusIndicator/StatusIndicator';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import JokeDisplay from './components/JokeDisplay/JokeDisplay';
import { useCounter } from './hooks/useCounter';
import { useChuckNorrisJoke } from './hooks/useChuckNorrisJoke';

function App() {
  const { counterState, increment, reset } = useCounter(0);
  const { jokeState, fetchJoke, clearJoke } = useChuckNorrisJoke();

  const handleIncrement = async () => {
    increment();
    await fetchJoke();
  };

  const handleReset = () => {
    reset();
    clearJoke();
  };

  const incrementButtonText = jokeState.isLoading ? 'Loading...' : 'Increment';

  return (
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

      <JokeDisplay jokeState={jokeState} />
    </div>
  );
}

export default App