import React from 'react';
import {Provider} from 'mobx-react';
import ReactDOM from 'react-dom';
import BasicLayout from './layouts/renderApp';
import store from './stores';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider {...store}>
    <BasicLayout />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
