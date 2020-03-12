import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

  return (
    <div>
    <div class='navBarStyle'>
    <Link class='homeLink' to='/'>Home</Link>
    <Link class='centerLink' to='/beerlist'>Cellar List</Link>
    <Link class='centerLink' to='/newbeer'>Add a Beer</Link>
    </div>
    </div>
  );
}

export default NavBar;
