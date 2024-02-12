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
    /*
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    Above 4 line code will execute the same thing cause every time 1 is passed to setCounter.So the final return value is 2.(if counter = 1)
    
     setCounter((prevCounter) => (prevCounter+1))
     we have a call back function in a setCounter  :  setCounter((lastUpdated State => {performing Action}))
    
     setCounter((prevCounter) => (prevCounter+1))
     setCounter((prevCounter) => (prevCounter+1))
     setCounter((prevCounter) => (prevCounter+1))
     setCounter((prevCounter) => (prevCounter+1))
     Result of Above 4 line Code will give us 5 as a answer when the value/first previous state is 1. 
    
    */
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
