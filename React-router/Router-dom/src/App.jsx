import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';




function App() {
 

  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="*" element={<Error/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
