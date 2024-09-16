import { useState,useCallback,useEffect ,useRef} from 'react'



function App() {
  const [length,setLength]=useState(8)
  const [noAllowed,setNoAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  //useRef  hook

  const passwordRef=useRef(null)



  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(noAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="~!@#$%^&*()_-=+{}[]<>,.?/"
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)


    }
    setPassword(pass)



  },[length,noAllowed,charAllowed,setPassword])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(2,3)
    window.navigator.clipboard.writeText(password)
  },[password])



  useEffect(()=>{
    passwordGenerator()
  },[length,noAllowed,charAllowed,passwordGenerator])
  
  return (
   
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pb-7 '>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='className="flex shadow rounder-lg overflow-hidden mb-4"'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
        <button className='outli
        -none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
          <label>langth:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={noAllowed} id='numberInput' onChange={()=>{
            setNoAllowed((prev)=>!prev);
          }}></input>
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={charAllowed} id='characterInput' onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}></input>
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>

    
  )
}

export default App
