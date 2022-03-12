import React, { useState, useCallback } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

  const [counter, setCounter] = useState(0);

  const incrementar = useCallback(  //usar esta función memorizada en los useEffect
    () => {
      setCounter(prev => prev + 1);
    },
    [setCounter],
  )


  return (
    <>
      <h3>CallbackHook: {counter}</h3>
      <hr />

      <ShowIncrement incrementar={incrementar} />


    </>
  )
}

export default CallbackHook;
