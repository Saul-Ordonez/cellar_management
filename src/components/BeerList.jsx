import React from 'react';
import Beer from './Beer';

function BeerList(props) {

  return (
    <div>
    {props.beerList.map((beer, index) =>
      <Beer
      name={beer.name}
      brewery={beer.brewery}
      bottled={beer.bottled}
      bought={beer.bought}
      abv={beer.abv}
      ibu={beer.ibu}
      img={beer.img}
      key={index}/>
    )}
    </div>
  );
}

export default BeerList;
