import { useState, useEffect, useRef } from "react";


const useFetch = (endPoint) => {

  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])



  useEffect(() => {

    setState({ data: null, loading: true, error: null })

    fetch(endPoint)
      .then(res => res.json())
      .then(data => {
        if (isMounted.current) {
          setState({ data, loading: false, error: null });
        } else {
          console.log('useEffect is not mounted');
        }
      })
      .catch(error => {
        if (isMounted.current) {
          setState({ data: null, loading: false, error })
        }
      })

  }, [endPoint])

  return { ...state }
}

export default useFetch
