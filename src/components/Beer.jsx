import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
    <h2>{props.name}</h2>
    <h4>{props.brewery}</h4>
    <h4>{props.bottled}</h4>
    <h4>{props.bought}</h4>
    <h4>{props.abv}</h4>
    <h4>{props.ibu}</h4>
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
