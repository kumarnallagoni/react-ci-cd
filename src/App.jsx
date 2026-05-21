import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <div className="card">
        <h1>⚛️ React + Vite</h1>
        <p>Lightning fast frontend tooling</p>
        
        <div className="counter-section">
          <button onClick={() => setCount(count + 1)}>
            Count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <div className="info-section">
          <h2>Next Steps:</h2>
          <ul>
            <li>Add routing with React Router</li>
            <li>Integrate state management</li>
            <li>Add UI component library</li>
            <li>Set up testing</li>
            <li>Deploy to production</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
