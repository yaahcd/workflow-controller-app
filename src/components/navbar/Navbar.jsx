import { Link } from "react-router-dom";
import {
  NavLink,
  NavLinks,
  NavbarContainer,
  LogoContainer,
} from "../homePage/homePage.styles";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <LogoContainer></LogoContainer>
        <NavLinks>
          <NavLink to="">Employees</NavLink>
          <NavLink to="">Jobs</NavLink>
          <NavLink to="">Map</NavLink>
        </NavLinks>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
