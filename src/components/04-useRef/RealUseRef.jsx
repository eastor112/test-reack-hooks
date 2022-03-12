import { useState } from "react";
import FetchQuote from "../useFetch/FetchQuote";

const RealUseRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div className="container mt-5">
      <h3>FocusScreen</h3>
      <button
        className="btn btn-primary my-3"
        onClick={() => setShow(!show)}
      >
        Show quotes
      </button>
      <hr />
      {
        show && <FetchQuote />
      }


    </div>
  )
}

export default RealUseRef;
