import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
import TellUsForm from './TellUsForm/TellUsForm';
import showResults from './showResults';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
      <div style={{ padding: 15 }}>
        <TellUsForm onSubmit={showResults} />
        <Values form="TellUsForm" />
      </div> 
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
