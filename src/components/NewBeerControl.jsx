import React from 'react';
import NewBeerForm from './NewBeerForm';
import ShowingBeerForm from './ShowingBeerForm';
import PropTypes from 'prop-types';

class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleShowingBeerForm = this.handleShowingBeerForm.bind(this);
  }

  handleShowingBeerForm(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewBeerForm onNewBeerCreation={this.props.onNewBeerCreation}/>
    } else {
      currentlyVisibleContent = <ShowingBeerForm onHandleShowingBeerForm={this.handleShowingBeerForm}/>;
    }
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}

NewBeerControl.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerControl;
