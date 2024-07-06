import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
        className="w-screen h-screen flex flex-wrap justify-center items-center"
        style={{
            backgroundImage: `url('https://www.aximdaily.com/wp-content/uploads/2021/09/closeup-rolled-variety-banknote-around-world-exchange-rate-forex-investment-concept.jpg')`,
            backgroundPosition: `center`,
            backgroundSize: 'cover',
        }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">Hello World</div>
        </div>
    </div>
  )
}

export default App
