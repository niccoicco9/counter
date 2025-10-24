import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleIncrement = () => {
    setIsAnimating(true)
    setCount(count + 1)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const handleReset = () => {
    setIsAnimating(true)
    setCount(0)
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
            disabled={isAnimating}
          >
            Increment
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
      </div>
    </div>
  )
}

export default App
