import React from 'react';
import HeadRoom from 'react-headroom';
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

 
`

const AppNav = ({ userToken, history, handleLogout }) => {
  const handleNavLink = (e) => {
    e.preventDefault();
    history.push(e.currentTarget.getAttribute('href'));
  };

  return (
    <HeadRoom>
      <Navbar fluid collapseOnSelect inverse id="fh5co-header">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" ><strong>Runner PH</strong></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse id="navbar">
          <Nav>
            <NavItem><span>Join A Race</span></NavItem>
            <NavItem><span>Results</span></NavItem>
            <NavItem><span>How It Works</span></NavItem>

          </Nav>
          <Nav pullRight>
            {userToken
              ?
              [
                <RouteNavItem key={3} onClick={handleNavLink} href="/"><span>Dashboard</span></RouteNavItem>,
                <RouteNavItem key={2} onClick={handleNavLink} href="/feeds"><span>Feeds</span></RouteNavItem>,
                <NavItem key={1} onClick={handleLogout}>Logout</NavItem>
              ]

              : [<RouteNavItem key={1} onClick={handleNavLink} href="/signup"><span>Signup</span></RouteNavItem>,
              <RouteNavItem key={2} onClick={handleNavLink} href="/login"><span>Login</span></RouteNavItem>]}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </HeadRoom>
  )
}

export default AppNav;
