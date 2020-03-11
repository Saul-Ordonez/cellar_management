import React from 'react';

function NewBeerForm(props) {

  let _name = null;
  let _brewery = null;
  let _bottled = null;
  let _bought = null;
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
        <input
        type='text'
        id='brewery'
        placeholder='Brewery'/>
        <input
        type='text'
        id='bottled'
        placeholder='Date Bottled'/>
        <input
        type='text'
        id='bought'
        placeholder='Date Bought'/>
        <input
        type='text'
        id='abv'
        placeholder='ABV'/>
        <input
        type='text'
        id='ibu'
        placeholder='IBU'/>
        <button type='submit'>Add Beer to cellar</button>
        </form>
        </div>
      );
    }

    export default NewBeerForm;
