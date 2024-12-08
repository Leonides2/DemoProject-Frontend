import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3>
          Click count: {count}
        </h3>
      </div>
      <button onClick={()=> setCount(count+1)}>
        click here
      </button>
    </>
  )
}

export default App
