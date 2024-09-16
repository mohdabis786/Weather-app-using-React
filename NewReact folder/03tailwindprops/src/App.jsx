import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:'hitesh',
    age:25
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 mb-4 '>Tailwind test</h1>
    <Card someobj={myObj} username="chaiorcode"btn="click here"/>
    <Card  btn="visit here"/>

   
   
    
   
    </>
  )
}

export default App
