import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="app">
      <h1>Counter App</h1>
      <div className="counter-container">
        <div className="counter-display">
          <span className="counter-label">Counter:</span>
          <span className={`counter-value ${count === 0 ? 'zero' : ''}`}>
            {count}
          </span>
        </div>
        
        <div className="button-container">
          <button 
            className="increment-button" 
            onClick={handleIncrement}
          >
            Increment
          </button>
          
          <button 
            className="reset-button" 
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
