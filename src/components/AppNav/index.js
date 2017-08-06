import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import {
  Nav,
  NavItem,
  Navbar
} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import RouteNavItem from '../RouteNavItem';

const NavBarWrapper = styled(Navbar) `
  background:white;
  height:60px;
  text-align:center;
  padding:0;
  box-shadow:0 3px 3px 0 rgba(0,0,0,0.14);
  a {
    color:#aaa;
    &:hover{
      color:#0da9ef !important;
      border-top:2px solid #0da9ef;
    }
  }
`

const AppNav = ({ userToken, history, handleLogout }) => {
  const handleNavLink = (e) => {
    e.preventDefault();
    history.push(e.currentTarget.getAttribute('href'));
  };

  return (
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" ><Logo/></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {userToken
            ?
            [
              <RouteNavItem key={3} onClick={handleNavLink} href="/">Dashboard</RouteNavItem>,
              <RouteNavItem key={2} onClick={handleNavLink} href="/feeds">Feeds</RouteNavItem>,
              <NavItem key={1} onClick={handleLogout}>Logout</NavItem>
            ]

            : [<RouteNavItem key={1} onClick={handleNavLink} href="/signup">Signup</RouteNavItem>,
            <RouteNavItem key={2} onClick={handleNavLink} href="/login">Login</RouteNavItem>]}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNav;
