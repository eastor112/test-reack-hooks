import { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <h3>HomeScreen</h3>
      <hr />
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </>
  )
}

export default HomeScreen;
