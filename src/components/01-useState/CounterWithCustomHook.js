import React from 'react'
import useCounterHook from '../../hooks/useCounterHook'



const CounterWithCustomHook = () => {

  const { state, incrementar, decrementar, reset } = useCounterHook(100)

  return (
    <>
      <h1>Counter with custom Hook: {state}</h1>
      <hr />

      <button className='btn' onClick={() => incrementar(5)}>+1</button>
      <button className='btn' onClick={reset}>reset</button>
      <button className='btn' onClick={() => decrementar(5)}>-1</button>
    </>
  )
}

export default CounterWithCustomHook
