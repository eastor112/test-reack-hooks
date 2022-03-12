import { useContext } from "react";
import { UserContext } from "./UserContext";

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h3>AboutScreen</h3>
      <hr />
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      <button
        className="btn btn-danger"
        onClick={() => {
          setUser({});
        }}
      >
        Logout
      </button>
    </>
  )
}

export default AboutScreen;
