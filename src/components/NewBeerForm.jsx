import React from 'react';
import PropTypes from 'prop-types';
import './NewBeerForm.css';

function NewBeerForm(props) {

  let _name = null;
  let _brewery = null;
  let _bottled = null;
  let _bought = null;
  let _abv = null;
  let _ibu = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();

    props.onNewBeerCreation(
      {
        name: _name.value,
        brewery: _brewery.value,
        bottled: _bottled.value,
        bought: _bought.value,
        abv: _abv.value,
        ibu: _ibu.value,}
      );
      console.log(_name.value);
        _name.value = '';
        _brewery.value = '';
        _bottled.value = '';
        _bought.value = '';
        _abv.value = '';
        _ibu.value = '';
      }

      return (
        <div class='formstyle'>
        <form onSubmit={handleNewBeerFormSubmission}>
        <input
        class='singleFormStyle'
        type='text'
        id='name'
        placeholder='Beer Name'/>
        <input
        class='singleFormStyle'
        type='text'
        id='brewery'
        placeholder='Brewery'/>
        <input
        class='singleFormStyle'
        type='text'
        id='bottled'
        placeholder='Date Bottled'/>
        <br/>
        <input
        class='singleFormStyle'
        type='text'
        id='bought'
        placeholder='Date Bought'/>
        <input
        class='singleFormStyle'
        type='text'
        id='abv'
        placeholder='ABV'/>
        <input
        class='singleFormStyle'
        type='text'
        id='ibu'
        placeholder='IBU'/>
        <br/>
        <button class="newBeerButton btn btn-outline-dark btn-lg" type='submit'>Add beer to cellar</button>
        </form>
        </div>
      );
    }

    NewBeerForm.propTypes = {
      onNewBeerCreation: PropTypes.func
    };

    export default NewBeerForm;
