import react from "react";

const Small = ({ value }) => {
  console.log('Small render')
  return (
    <>
      <h3>{value}</h3>
    </>
  )
}

export default react.memo(Small);
