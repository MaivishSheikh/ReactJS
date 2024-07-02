import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log('App Rendered', Math.random())
  const [value , setValue] = useState({
    value: 0
  })
  // const [multipliedValue, setMultipliedValue] = useState(5)
  // let multipliedValue = value * 5

  // const multiplyByFive = () => {
  //   // setMultipliedValue(value * 5)
  //   setValue(value + 1)
  // }

  // value will be rendered when the state is changed i.e. new value is introduced

  const clickMe = () => {
    // setValue(value + 1) Here app will be rendered
    // setValue(1) Here the app will not be rendered as the updated value is same as the original value
    // setValue(3) Here the app will be rendered twice as the updated value is different from the original value
    setValue({value: 0}) // here the app will be rendered every time the button is clicked because values of primitive data types are pass by value whereas values of non-primitive data types are pass by reference which always pass a new value
  }

  return (
    <>
      <h1>Main Value: {value.value}</h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
      {/* <h2>Multiplied Value: {multipliedValue}</h2> */}
    </>
  )
}

export default App
