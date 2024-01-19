/*
    useState = re-renders the component when the state value changes

    useRef = use "reference" does not cause re-renders when its value changes
        1. Accessing/Interacting with DOM elements
        2. Handling focus, Animations, and Transitions
        3. Managing Timers and Intervals
*/

import { useEffect, useState, useRef } from 'react';

export default function MyComponent() {
  
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
   console.log("COMPONENT RENDERED")
  })

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }
  
    return (
    <div>
      <button onClick={handleClick1}>
        Click me 1!
      </button>
      <input ref={inputRef1} /><br />
      
      <button onClick={handleClick2}>
        Click me 2!
      </button>
      <input ref={inputRef2} /><br />
      
      <button onClick={handleClick3}>
        Click me 3!
      </button>
      <input ref={inputRef3} />
    </div>
  )
}
