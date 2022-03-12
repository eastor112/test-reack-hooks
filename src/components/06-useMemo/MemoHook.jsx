import useCounterHook from "../../hooks/useCounterHook";
import { useState } from "react";
import { useMemo } from "react";

const MemoHook = () => {
  const { counter, incrementar } = useCounterHook(5000);
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  }

  const bigCounter = (iter) => {
    for (let i = 0; i < iter; i++) {
      console.log('task');
    }
    return `${iter} iternaciones realizadas`;
  }

  const memoProcesado = useMemo(() => bigCounter(counter), [counter])

  return (
    <>
      <h3>MemoHook</h3>
      <small>Counter: {counter}</small>
      <hr />
      {memoProcesado}
      <button className='mt-5' onClick={() => incrementar(1)}>Incrementar</button>
      <hr />
      <button onClick={handleClick} className='btn btn-outline-primary'>
        show: {show ? 'true' : 'false'}
      </button>
    </>
  )
}

export default MemoHook;
