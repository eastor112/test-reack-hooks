import { useState, useRef, useLayoutEffect } from "react";
import useFetch from "../../hooks/useFetch";

const LayoutEffect = () => {
  const [counter, setCounter] = useState(1)
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  const quote = !!data && data[0].quote;

  const pTag = useRef();

  useLayoutEffect(() => { // se ejecuta despues de renderizado todos los componentes
    setBoxSize({
      width: pTag.current.getBoundingClientRect().width,
      height: pTag.current.getBoundingClientRect().height
    })

  }, [quote]);

  return (
    <div>

      <p style={{ display: 'inline-block' }} ref={pTag}>

        {quote}

      </p>
      <div className="mt-5">
        <button onClick={() => setCounter(counter + 1)}>
          Other Quote
        </button>
        <hr />
        <pre>
          {JSON.stringify(boxSize, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default LayoutEffect;
