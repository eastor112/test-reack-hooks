import React, { useState } from 'react';

const App = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20
  });

  const { counter1, counter2 } = state

  return (
    <div >
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <hr />

      <button onClick={() => {
        setState({
          ...state,
          counter1: counter1 + 1
        });
      }}>+1</button>

    </div>
  )
}

export default App
