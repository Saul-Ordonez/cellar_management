import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';
import './Beer.css';

function BeerList(props) {

  return (
    <div class='card'>
    {props.beerList.map((beer, index) =>
      <Beer
      name={beer.name}
      brewery={beer.brewery}
      bottled={beer.bottled}
      bought={beer.bought}
      abv={beer.abv}
      ibu={beer.ibu}
      key={index}/>
    )}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;
