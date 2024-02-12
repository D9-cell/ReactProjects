import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h2> Custom My App | Deepon Das </h2>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "Its Me Deepon."
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click Me to Visit Google !',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App /> // This can be done
    // <MyApp/> // This can be done
    // anotherElement // This can be done
    reactElement
    // <App/>
)