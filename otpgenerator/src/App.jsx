import { useState, useCallback, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [captcha, setCaptcha] = useState('');
  const [veriCapt, setVeriCapt] = useState('');
  const [inputValue, setInputValue] = useState('');

  const captchaGenerator = useCallback(() => {
    const length = 8;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let capt = '';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * chars.length);
      capt += chars[char];
    }
    
    setCaptcha(capt);
  }, []);

  const verifyCaptcha = useCallback(() => {
    setVeriCapt(inputValue === captcha ? 'Captcha Verified' : 'Incorrect Captcha');
    setTimeout(() => {
      captchaGenerator(); // Generate a new captcha after 2 seconds
      setVeriCapt('')
      setInputValue(''); // Clear the input field
    }, 2000);
  }, [captcha, inputValue, captchaGenerator]);

  useEffect(() => {
    captchaGenerator();
  }, [captchaGenerator]);

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg py-4 my-8 text-teal-700 bg-rose-700">
        <h1 className="text-white text-center text-2xl">Captcha Generator</h1>
        <div className="rounded overflow-hidden mb-4 p-4">
          <input type="text" value={captcha} className="font-mono outline-none w-full text-center py-2 text-2xl rounded-md" readOnly />
          <button className="block bg-white py-1 px-3 rounded mt-3" onClick={captchaGenerator}>Generate Captcha</button>
        </div>
        <div className="flex rounded overflow-hidden mb-4 p-4">
          <input
            type="text"
            className="font-mono outline-none w-full py-3 px-5 rounded-md rounded-r-none text-xl"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter captcha"
          />
          <button className="bg-teal-700 text-white outline-none px-10 py-0.5 shrink-0 rounded-md rounded-l-none" onClick={verifyCaptcha}>Verify</button>
        </div>
        <div className="bg-rose-700">
          <input type="text" className="text-l bg-transparent text-white text-center" value={veriCapt} readOnly />
        </div>
      </div>
    </>
  );
}

export default App;
