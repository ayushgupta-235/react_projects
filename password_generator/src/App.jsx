import {useState,useCallback, useEffect,useRef } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

   //useCallback – Optimizes Functions
// Prevents unnecessary function re-creation on every render.
// Useful when passing functions to child components.

  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) str += "0123456789";
    if (includeSymbols) str += "!@#$%^&*()-_=+";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(newPassword);
  },[length,includeNumbers,includeSymbols,setPassword]) //here setPassword is for better optimization,you can ignore it


//   useEffect – Handles Side Effects
//  Runs after rendering (e.g., fetching data, updating DOM, setting timers).
//  Runs on:

// Every render (useEffect(fn))
// Only on mount (useEffect(fn, []))
// On state/prop change (useEffect(fn, [dependency]))
  useEffect(()=>{
    generatePassword()
  },[length,includeNumbers,includeSymbols,generatePassword])

  //ref hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);//it copies the password to clipboard
    passwordRef.current?.select();//it will give better UI experience to show that password is selected
    passwordRef.current?.setSelectionRange(0,99);  // to select some length
    
  },[password])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-semibold text-white text-center mb-4">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center bg-gray-700 p-3 rounded-lg mb-4">
          <input
             
            type="text"
            readOnly
            value={password}
            className="bg-transparent text-white w-full outline-none"
            placeholder="Password"
            ref={passwordRef}//for reference in useRef hook
          />
          <button
          onClick={copyPasswordToClipboard}
            className="text-white px-3 py-1 bg-green-500 rounded hover:bg-green-600 transition"
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="text-white">Length: {length}</label>
          <input
            type="range"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full cursor-pointer"
          />
        </div>

        {/* Checkbox Options */}
        <div className="flex flex-col gap-2 text-white">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev)=> !prev)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols((prev)=> !prev)}
            />
            Include Symbols
          </label>
        </div>

        
      </div>
    </div>
  );
}
