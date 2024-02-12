import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"Deepon",
    age:21
  }
  let newArray = [1,2,3,4]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card username="Debangana Paul" btnText="Click Me!" someObj={myObj} someArr ={newArray}/>
     <Card username="Dustu Bhodai" btnText="Visit Me!"/>
     <Card />
    </>
  )
}

export default App
