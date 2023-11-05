import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #457B9D;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 80px;
`;

export const NavLink = styled(Link)`
  font-family: 'Kite One';
  font-weight: bolder;
  font-size: 18px;
  color: black;
  padding: 15px 20px;
  cursor: pointer;
  background-color: #1D3557;
  color: white;
  border-radius: 10px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  text-shadow: 1px 0px 1px rgba(128, 0, 0, 1);
  opacity: 0.85;
  transition: .4s;

  &:hover {
    opacity: 1
  }
`;
