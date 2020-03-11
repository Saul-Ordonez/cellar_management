import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import BeerList from './BeerList';
import NewBeerControl from './NewBeerControl';
import NewBeerForm from './NewBeerForm';
import Landing from './Landing';
import NavBar from './NavBar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: [
        {
          name: 'Pliney the Elder',
          brewery: 'Russian River Brewing Co.',
          bottled: '1/2/15',
          bought: '1/2/15',
          abv: '12%',
          ibu: '100'
        },
        {
          name: 'CBS',
          brewery: 'Founders Brewing',
          bottled: '1/2/15',
          bought: '1/2/15',
          abv: '11.7%',
          ibu: '45'
        },
        {
          name: '4 Seasons Hazy IPA',
          brewery: 'Mother Earth Brewing',
          bottled: '1/2/15',
          bought: '1/2/15',
          abv: '7.5%',
          ibu: '55'
        },
        {
          name: 'Hazy Rabbit IPA',
          brewery: 'Lakefront Brewery',
          bottled: '1/2/15',
          bought: '1/2/15',
          abv: '5.2%',
          ibu: '61'
        },
        {
          name: 'Fog Breaker IPA',
          brewery: 'Anchor Brewing',
          bottled: '1/2/15',
          bought: '1/2/15',
          abv: '6.8%',
          ibu: '64'
        },
        {
          name: 'Ruby Redbird',
          brewery: 'Shiner',
          bottled: '1/2/15',
          bought: '1/2/15',
          abv: '4%',
          ibu: '22'
        },
        {
          name: 'Cuvée Du Jongluer',
          brewery: 'Cascade Brewing Barrel House',
          bottled: '1/2/15',
          bought: '1/2/15',
          abv: '9.4%',
          ibu: '44'
        },
        {
          name: 'Bourbon County Double Barrel',
          brewery: 'Goose Island',
          bottled: '1/2/15',
          bought: '1/2/15',
          abv: '18%',
          ibu: '30'
        },
        {
          name: 'Distorted Perception',
          brewery: 'Hardywood Park',
          bottled: '1/2/15',
          bought: '1/2/15',
          abv: '7%',
          ibu: '58'
        },
        {
          name: 'Witch Finder',
          brewery: 'Holy Mountain',
          bottled: '1/2/15',
          bought: '1/2/15',
          abv: '6.1%',
          ibu: '35'
        }
      ]
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  handleAddingNewBeerToList(newBeer){
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({ masterBeerList: newMasterBeerList });
  }

  render() {

    return (
      <div>
      <NavBar />
      <Switch>
      <Route exact path='/' component={Landing} />
      <Route
        exact
        path='/beerlist'
        render={()=> (
          <div>
            <BeerList beerList={this.state.masterBeerList} />
            <NewBeerControl onNewBeerCreation={this.handleAddingNewBeerToList} />
          </div>
        )}
        />
      <Route
        path='/newbeer'
        render={()=> (
          <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />
        )}
        />
      <Route component={Error404}/>
      </Switch>
      </div>
    );
  }

}

export default App;
