import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #ADB5BD;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  font-family: 'Kite One';
  font-weight: bolder;
  font-size: 18px;
  color: black;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #CED4DA;
  }
`;
