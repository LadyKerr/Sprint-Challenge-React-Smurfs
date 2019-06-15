import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import './navbar.css';

const Nav = styled.nav `
  display: flex;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 1px solid #62cdfd;
  margin: 30px;
`;


const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavLink to='/'exact className="nav-links"> Smurf Village </NavLink>
        <NavLink to='/smurf-form' exact className="nav-links"> Add Smurf </NavLink>
      </Nav>
    </div>
  );
}

export default NavBar;