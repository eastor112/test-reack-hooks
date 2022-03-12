import { useRef } from "react";

const FocusScreen = () => {

  const ref = useRef()

  const handleClick = () => {
    ref.current.select();
  }

  return (
    <div className="container mt-5">
      <h3>FocusScreen</h3>
      <hr />


      <input ref={ref} type="text" className="form-control" placeholder="Nombre" />

      <button
        onClick={handleClick}
        className="btn btn-primary mt-3"
      >
        Foco
      </button>
    </div>
  )
}

export default FocusScreen;
