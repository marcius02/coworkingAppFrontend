import { useState } from 'react'
import sos1 from './Assets/Images/sos1.jpg'
import sos2 from './Assets/Images/sos2.jpg'
import './Assets/Styles/App.css'
import { Button } from './componentsShadcn/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={sos2} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={sos1} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
          <Button type="button" variant="destructive" >Hola gente</Button>
      </div>
   
    </>
  )
}

export default App
