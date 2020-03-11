import React from 'react';

function ShowingBeerForm(props){
  return (
    <div>
      <button  onClick={props.onHandleShowingBeerForm}>Add a new beer to the cellar</button>
    </div>
  );
}

export default ShowingBeerForm;
