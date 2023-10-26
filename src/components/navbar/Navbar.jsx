import { Outlet } from "react-router-dom";
import {
  LogoContainer,
  NavLinks,
  NavbarContainer,
  NavLink,
} from "./navbar.styles";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <LogoContainer></LogoContainer>
        <NavLinks>
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
