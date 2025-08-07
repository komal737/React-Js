import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]= useState(0)
  const [error, seterror] = useState("")
  const add=()=>{
    setCount(count+1)
    seterror("")
  }
  const remove=()=>{
    if(count>0){
      setCount(count-1)
      seterror("")
    }
    else{
      seterror("Can't go below 0")
    }
    
  }
  return (
    <>
      <div>
        <h3>{count}</h3>
        <button  onClick={add}>Add</button>
        <button onClick={remove}>Remove</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  )
}

export default App
