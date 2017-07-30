import React from 'react';
import styled from 'styled-components';
import {
  Nav,
  NavItem,
  Navbar
}  from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import RouteNavItem from '../RouteNavItem';

const NavBarWrapper = styled(Navbar)`
  background:${props=>props.theme.headerBg} !important;  
  a {
    color:white !important;   
    &:hover{
      color:orange !important;
    }
  }
`

const AppNav = ({userToken, history, handleLogout}) => {
  const handleNavLink = (e) =>{  
    e.preventDefault();
    history.push(e.currentTarget.getAttribute('href'));
  };

  return (
     <NavBarWrapper fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">VRacePH</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              { userToken
                ? 
                  [
                  <RouteNavItem key={3} onClick={handleNavLink} href="/">Dashboard</RouteNavItem>,
                  <RouteNavItem key={2} onClick={handleNavLink} href="/submit-run">Feeds</RouteNavItem>,
                  <NavItem key={1} onClick={handleLogout}>Logout</NavItem>
                  ]
                 
                : [ <RouteNavItem key={1} onClick={handleNavLink} href="/signup">Signup</RouteNavItem>,
                    <RouteNavItem key={2} onClick={handleNavLink} href="/login">Login</RouteNavItem> ] }
            </Nav>
          </Navbar.Collapse>
        </NavBarWrapper>
  )
}

export default AppNav;
