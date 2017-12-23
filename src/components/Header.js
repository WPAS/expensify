import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </nav>
  </header>
)

export default Header;
