import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import AboutScreen from "./AboutScreen";
import AppRouter from "./AppRouter";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NotFound from "./NotFound";
import { UserContext } from "./UserContext";


const MainApp = () => {

  const [user, setUser] = useState({})



  return (
    <UserContext.Provider value={{
      user,
      setUser,
      lerning: true
    }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppRouter />}>
            <Route index element={<HomeScreen />} />
            <Route path="about" element={<AboutScreen />} />
            <Route path="login" element={<LoginScreen />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </UserContext.Provider>
  )
}

export default MainApp;
