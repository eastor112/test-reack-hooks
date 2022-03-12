import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      <NavLink style={({ isActive }) => ({
        display: "block",
        margin: "1rem 0",
        color: isActive ? "red" : "",
      })} to="">Home</NavLink>

      <NavLink style={({ isActive }) => ({
        display: "block",
        margin: "1rem 0",
        color: isActive ? "red" : "",
      })} to="login">Login</NavLink>

      <NavLink style={({ isActive }) => ({
        display: "block",
        margin: "1rem 0",
        color: isActive ? "red" : "",
      })} to="about">About</NavLink>
    </nav>
  )
}


export default NavBar;
