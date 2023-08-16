import React, {useState} from 'react'

export const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  )
}