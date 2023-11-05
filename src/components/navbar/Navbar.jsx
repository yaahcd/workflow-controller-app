import { Outlet } from "react-router-dom";
import {
  NavLinks,
  NavbarContainer,
  NavLink,
} from "./navbar.styles";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <NavLinks>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="employees">Employees</NavLink>
          <NavLink to="jobs">Jobs</NavLink>
          <NavLink to="">Map</NavLink>
          <NavLink to="">Sign Out</NavLink>
        </NavLinks>
      </NavbarContainer>
      <Outlet/>
    </>
  );
}

export default Navbar;
