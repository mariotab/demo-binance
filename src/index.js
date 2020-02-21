import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './rootReducer'
import App from './App';

const aplication = (
<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>)

ReactDOM.render( aplication, document.getElementById('root'))
