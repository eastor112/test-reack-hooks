import { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {

  const { setUser } = useContext(UserContext)

  return (
    <>
      <h3>LoginScreen</h3>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => { setUser({ id: 123, name: "Juan" }) }}
      >
        Login
      </button>
    </>
  )
}

export default LoginScreen;
