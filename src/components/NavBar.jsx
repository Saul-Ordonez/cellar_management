import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

  return (
    <div>
    <div class='navBarStyle'>
    <div class='title'>
    <h1>Cellar Mate</h1>
    </div>
    <Link class='homeLink' to='/'>Home</Link>
    <Link class='listLink' to='/beerlist'>Cellar List</Link>
    <Link class='newBeerLink' to='/newbeer'>Add a Beer</Link>
    </div>
    </div>
  );
}

export default NavBar;
