import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'; 
import Home from './Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='app'>
      <Navbar></Navbar>
      <div className='component'>
        <Home></Home>

      </div>

    </div>
      
    </>
  )
}

export default App;
