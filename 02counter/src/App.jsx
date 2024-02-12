import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)
  
  //let counter = 10

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log("Value Added " , counter);
  }

  const decreaseValue = () => {
    counter = counter - 1;
    setCounter(counter)
    console.log("Value Decreased : " , counter);
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
          onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <br/>
      <button
        onClick={decreaseValue}
      >Remove Value {counter}</button>
      <p> footer : {counter}</p>
    </>
  )
}

export default App
