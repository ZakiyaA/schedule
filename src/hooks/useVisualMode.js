// import { useState } from 'react'

// export default function useVisualMode(initial) {
//   const [mode, setMode] = useState(initial)
//   const [history, setHistory] = useState([initial])
//   function transition(nextMode, replace = false) {
//     setMode(nextMode)
//     if (replace) {
//       setHistory(prev => [prev[0]])
//     }
//     setHistory(prev => [...prev, nextMode])
//   }
//   function back() {
//     history.pop()
//     if (history.length) {
//       const prevMode = history[history.length - 1]
//       setMode(prevMode)
//     }
//   }
//   return { mode, transition, back }
// }





import { useState } from "react";

// Handle the different switch between modes and keep tracks of the previous modes to be able to go back
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Set a new mode and add it to the history
  const transition = (newMode, replace=false) => {
    // setMode(newMode);
    // if (replace) {
    //   setHistory(prev => [...prev.slice(0, prev.length - 1), newMode]);
    // } else {
    //   setHistory(prev => [...prev, newMode]);
    // }
    setHistory(prev =>
      replace ? [...prev.slice(0, -1), newMode] : [...prev, newMode]
    );
  };

  // Set a previous mode and removes the last one from the history
  const back = () => {
    // if (history.length > 1) {
    //   setMode(history[history.length - 2]);
    //   setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    // }
    setHistory(prev => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  return { mode:history[history.length-1], transition, back };
};




