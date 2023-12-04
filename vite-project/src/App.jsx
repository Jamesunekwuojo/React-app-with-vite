import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'; 
import Home from './Home';
//Note react can't ouput booleans and objects

function App() {
  const word = "Welcome to my page"
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='app'>
      <Navbar></Navbar>
      <div className='component'>
        <Home></Home>
       
        <p>{word}</p>

      </div>

    </div>
      
    </>
  )
}

export default App;
