import React from 'react';
import NewBeerForm from './NewBeerForm.jsx';
import ShowBeerForm from './ShowBeerForm'

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
      currentlyVisibleContent = <NewBeerForm onNewBeerCreate={this.props.onNewBeerCreate}/>
    } else {
      currentlyVisibleContent = <ShowBeerForm onHandleShowingBeerForm={this.handleShowingBeerForm}/>;
    }
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewBeerControl;
