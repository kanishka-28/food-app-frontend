import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import SignupApi from './Context-Api/signup';

ReactDOM.render(
  <React.StrictMode>
    
      <BrowserRouter>
      
        <App />

    
      </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
