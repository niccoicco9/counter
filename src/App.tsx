import { useState } from 'react'
import './App.css'

interface ChuckNorrisJoke {
  value: string
}

function App() {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [joke, setJoke] = useState<string>('')
  const [isLoadingJoke, setIsLoadingJoke] = useState(false)

  const fetchChuckNorrisJoke = async (): Promise<void> => {
    try {
      setIsLoadingJoke(true)
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: ChuckNorrisJoke = await response.json()
      setJoke(data.value)
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error)
      setJoke('Failed to fetch joke. Please try again.')
    } finally {
      setIsLoadingJoke(false)
    }
  }

  const handleIncrement = async () => {
    setIsAnimating(true)
    setCount(count + 1)
    setTimeout(() => setIsAnimating(false), 300)
    
    // Fetch Chuck Norris joke
    await fetchChuckNorrisJoke()
  }

  const handleReset = () => {
    setIsAnimating(true)
    setCount(0)
    setJoke('')
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <div className="app">
      <h1>Counter App</h1>
      <div className="counter-container">
        <div className="counter-display">
          <span className="counter-label">Counter:</span>
          <span 
            className={`counter-value ${count === 0 ? 'zero' : ''} ${isAnimating ? 'animate' : ''}`}
            aria-live="polite"
            aria-label={`Counter value is ${count}`}
          >
            {count}
          </span>
        </div>
        
        <div className="status-indicator">
          {count === 0 && <span className="status-text">Counter is at zero</span>}
          {count > 0 && <span className="status-text">Counter is active</span>}
        </div>
        
        <div className="button-container">
          <button 
            className="increment-button" 
            onClick={handleIncrement}
            aria-label="Increment counter by 1"
            disabled={isAnimating || isLoadingJoke}
          >
            {isLoadingJoke ? 'Loading...' : 'Increment'}
          </button>
          
          <button 
            className="reset-button" 
            onClick={handleReset}
            aria-label="Reset counter to zero"
            disabled={isAnimating}
          >
            Reset
          </button>
        </div>

        {joke && (
          <div className="joke-container">
            <h3 className="joke-title">Chuck Norris Joke:</h3>
            <p className="joke-text">{joke}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App