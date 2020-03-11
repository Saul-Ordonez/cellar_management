import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
    <App>
    <Component/>
    </App>
    </HashRouter>,
    document.getElementById('root')
  );
};

serviceWorker.unregister();
render(App);
