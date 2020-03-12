import React from 'react';
import PropTypes from 'prop-types';
import './Beer.css';

function Beer(props) {
  return (
    <div>
    <div class='card'>
    <h2>{props.name}</h2>
    <h4>{props.brewery}</h4>
    <h4>Date bottled: {props.bottled}</h4>
    <h4>Date Bought: {props.bought}</h4>
    <h4>ABV: {props.abv}</h4>
    <h4>IBUs: {props.ibu}</h4>
    </div>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  bottled: PropTypes.string.isRequired,
  bought: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  ibu: PropTypes.string.isRequired,
};

export default Beer;
