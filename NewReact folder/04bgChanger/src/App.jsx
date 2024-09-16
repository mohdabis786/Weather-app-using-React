import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive");
  function Btn1(){
    setColor("red")
  }
  function Btn2(){
    setColor("green")
  }
  function Btn3(){
    setColor("blue")
  }
  function Btn4(){
    setColor("magenta")
  }
  function Btn5(){
    setColor("yellow")
  }

  return (
   <div className="w-fill h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={Btn1}>Red</button>
        <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={Btn2}>green</button>
        <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={Btn3}>blue</button>
        <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"magenta"}} onClick={Btn4}>magenta</button>
        <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}} onClick={Btn5}>yellow</button>
      </div>
    </div>
   </div>
  )
}

export default App
