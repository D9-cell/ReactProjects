import Chai from "./chai"

function App() {

  const userName = "Deepon"

  return (
      <> 
    <Chai />
    <h1>By this we can also render this text {userName}</h1>
    </>
  )
}

// "{username}" --> this is evaluated expression

export default App
