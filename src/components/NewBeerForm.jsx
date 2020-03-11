import React from 'react';

function NewBeerForm(props) {

  let _name = null;
  let _brewery = null;
  let _size = null;
  let _abv = null;
  let _ibu = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();

    props.onNewBeerCreate(
      {name: _name.value,
        brewery: _brewery.value,
        bottled: _bottled.value,
        bought: _bought.value,
        abv: _abv.value,
        ibu: _ibu.value,});
        _name.value = '';
        _brewery.value = '';
        _bottled.value = '';
        _bought.value = '';
        _abv.value = '';
        _ibu.value = '';
      }

      return (
        <div>
        <form onSubmit={handleNewBeerFormSubmission}>
        <input
        type='text'
        id='name'
        placeholder='Beer Name'/>
        ref={(input) => {_name = input;}}/>
        <input
        type='text'
        id='brewery'
        placeholder='Brewery'/>
        ref={(input) => {_brewery = input;}}/>
        <input
        type='text'
        id='bottled'
        placeholder='Date Bottled'/>
        ref={(input) => {_bottled = input;}}/>
        <input
        type='text'
        id='bought'
        placeholder='Date Bought'/>
        ref={(input) => {_bought = input;}}/>
        <input
        type='text'
        id='abv'
        placeholder='ABV'/>
        ref={(input) => {_abv = input;}}/>
        <input
        type='text'
        id='ibu'
        placeholder='IBU'/>
        ref={(input) => {_ibu = input;}}/>
        <button type='submit'>Add Beer to cellar</button>
        </form>
        </div>
      );
    }

    export default NewBeerForm;
