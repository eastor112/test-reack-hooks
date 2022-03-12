import react from "react";

const ShowIncrement = (props) => {
  console.log('Render ShowIncrement')
  return (
    <button
      className="btn btn-primary"
      onClick={props.incrementar}
    >
      Incrementar
    </button>
  )
}

export default react.memo(ShowIncrement);
