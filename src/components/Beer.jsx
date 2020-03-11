import React from 'react';

function Beer(props) {
  return (
    <div>
    <h2>{props.name}</h2>
    <h4>{props.brewery}</h4>
    <h4>{props.date_bottled}</h4>
    <h4>{props.date_bought}</h4>
    <h4>{props.abv}</h4>
    <h4>{props.ibu}</h4>
    <h4>{props.img}</h4>
    </div>
  );
}

export default Beer;
