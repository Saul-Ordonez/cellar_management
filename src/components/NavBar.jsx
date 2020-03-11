import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div>
    <Link class='link' to='/'>Home</Link>
    <Link class='link' to='/beerlist'>Cellar List</Link>
    <Link class='link' to='/newbeer'>Add a Beer</Link>
    </div>
  );
}

export default NavBar;
