import React from 'react';
import PropTypes from 'prop-types';

function ShowingBeerForm(props){
  return (
    <div>
      <button  onClick={props.onHandleShowingBeerForm}>Add a new beer to the cellar</button>
    </div>
  );
}

ShowingBeerForm.propTypes = {
  onHandleShowingBeerForm: PropTypes.func
};

export default ShowingBeerForm;
