import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Error404 from './Error404';

function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={Landing} />
    <Route component={Error404} />
    </Switch>

    </div>
  );
}

export default App;
