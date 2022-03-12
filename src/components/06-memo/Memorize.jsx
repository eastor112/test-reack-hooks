import useCounterHook from "../../hooks/useCounterHook";
import Small from "./Small";
import React, { useState } from "react";

const Memorize = () => {

  const { counter, incrementar } = useCounterHook(10);
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <>
      <h3>Memorize</h3>
      <Small value={counter} />
      <button className='mt-5' onClick={() => incrementar(1)}>Incrementar</button>
      <hr />
      <button onClick={handleClick} className='btn btn-outline-primary'>
        show: {show ? 'true' : 'false'}
      </button>
    </>
  )
}

export default Memorize;
