import { useState } from "react"

function App() {
  const [color, setColor] = useState('darkred')

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap flex-col justify-center right-12 inset-y-0 py-2">
          <div className="flex flex-wrap flex-col justify-center gap-3 shadow-lg bg-slate-100 p-3 rounded-xl">
            <button 
            onClick={() => setColor('red')} 
            className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'red'}}>Red</button>
            <button 
            onClick={() => setColor('blue')} 
            className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'blue'}}>Blue</button>
            <button onClick={() => setColor('green')}  className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'green'}}>Green</button>
            <button onClick={() => setColor('purple')}  className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'purple'}}>Purple</button>
            <button onClick={() => setColor('black')}  className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'black'}}>Black</button>
            <button onClick={() => setColor('cyan')}  className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'cyan'}}>Cyan</button>
            <button onClick={() => setColor('coral')}  className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'coral'}}>Coral</button>
            <button onClick={() => setColor('yellow')}  className="outline-none px-2 py-1 rounded-full shadow-lg" style={{backgroundColor: 'yellow'}}>Yellow</button>
            <button onClick={() => setColor('grey')}  className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'grey'}}>Grey</button>
            <button onClick={() => setColor('white')}  className="outline-none px-2 py-1 rounded-full shadow-lg" style={{backgroundColor: 'white'}}>White</button>
            <button onClick={() => setColor('brown')}  className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'brown'}}>Brown</button>
            <button onClick={() => setColor('pink')}  className="outline-none px-3 py-1 rounded-full shadow-lg" style={{backgroundColor: 'pink'}}>Pink</button>
            <button onClick={() => setColor('skyblue')}  className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'skyblue'}}>Sky Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
