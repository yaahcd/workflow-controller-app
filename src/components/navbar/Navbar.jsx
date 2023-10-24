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
          <NavLink to="">Employees</NavLink>
          <NavLink to="">Jobs</NavLink>
          <NavLink to="">Map</NavLink>
        </NavLinks>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
