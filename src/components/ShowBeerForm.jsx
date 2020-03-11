
import React from 'react';

function ShowBeerForm(props){
  return (
    <div className = 'button' >
      <button  onClick={props.onHandleShowingBeerForm}>Add a new beer to the cellar</button>
    </div>
  );
}

export default ShowBeerForm;
