import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useState } from 'react'

const FetchQuote = () => {

  const [counter, setCounter] = useState(1)
  const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);


  return (
    <div>
      FetchQuote
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error :{error}</p>}
        {data && <pre> {JSON.stringify(data, null, 2)} </pre>}

      </div>

      <button onClick={() => setCounter(counter + 1)}>
        Other Quote
      </button>
    </div>
  )
}

export default FetchQuote
