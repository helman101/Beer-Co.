import React from 'react';
import icon from '../assets/img/beer.png'

const Navbar = () => (
  <nav className="navbar d-flex align-items-center">
    <div>
      <img className="icon" src={icon} alt="beer cup icon"/>
    </div>
    <div className="brand-name">
      {'Beer Co.'}
    </div>
  </nav>
);

export default Navbar;