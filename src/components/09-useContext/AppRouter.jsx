import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


const AppRouter = () => {

  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default AppRouter;
