import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import Store from "./Redux/store.js";
import SignupApi from './Context-Api/signup';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
      
        <App />

    
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
