// import {React, useState} from "react";


  
// export default function useVisualMode(initial) {
//   const [history, setHistory] = useState(initial);
//   // const [mode, setMode] = useState(initial);
//   function transition(nextMode) {
//     const nextHistory = [...history];
//     nextHistory.push(nextMode);
//     setHistory(nextHistory);
//   };
//   const back = function(){
//     const nextHistory = [...history];
//     nextHistory.pop();
//     setHistory(nextHistory);
//   };
//   const mode = history.slice(-1)[0];
//   return { mode, transition, back, history};
// }






import { useState } from 'react'

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial])
  function transition(nextMode, replace = false) {
    setMode(nextMode)
    if (replace) {
      setHistory(prev => [prev[0]])
    }
    setHistory(prev => [...prev, nextMode])
  }
  function back() {
    history.pop()
    if (history.length) {
      const prevMode = history[history.length - 1]
      setMode(prevMode)
    }
  }
  return { mode, transition, back }
}


// const [setSome, setSomeState] = useState({thing: 'loding', count: 1});
// setSomeState(prev => ({...prev, count: prev.count + 1}));




