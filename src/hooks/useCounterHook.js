import { useState } from "react";

const useCounterHook = (defaultValue = 10) => {
  const [counter, setCounter] = useState(defaultValue);

  const incrementar = (factor = 1) => {
    setCounter(counter + factor);
  }

  const decrementar = (factor = 1) => {
    setCounter(counter - factor);
  }

  const reset = () => {
    setCounter(defaultValue);
  }

  return {
    counter,
    incrementar,
    decrementar,
    reset
  }
}

export default useCounterHook
