import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

  ReactDOM.render(
    <HashRouter>
    <App>
    </App>
    </HashRouter>,
    document.getElementById('root')
  );

serviceWorker.unregister();
