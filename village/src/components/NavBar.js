import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to='/'exact> Smurf Village </NavLink>
      <NavLink to='/smurf-form' exact> Add Smurf </NavLink>
    </div>
  );
}

export default NavBar;