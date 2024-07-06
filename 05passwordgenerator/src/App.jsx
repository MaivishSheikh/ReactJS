import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*-_+={}[]~`'

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)   
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full shadow-md rounded-lg p-10 my-8 text-orange-500" style={{backgroundImage: 'url(https://mrwallpaper.com/images/file/blockchain-two-toned-colour-gnpa43mkrynwpghg.jpg)'}}>
        <h1 className="text-white text-center text-2xl mb-5">Password Generator</h1>
        <div className="flex shadow rounded overflow-hidden mb-4 p-4">
          <input type="text" value={password} className='outline-none w-full py-3 px-3 rounded-md rounded-r-none' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPassword} className="bg-blue-700 text-white outline-none px-5 py-0.5 shrink-0 rounded-md rounded-l-none" id='copyBtn'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 px-4 mt-10">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={20} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {setNumberAllowed((prev) => !prev)}} /> 
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={() => {setCharAllowed((prev) => !prev)}} /> 
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
