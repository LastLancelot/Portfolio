import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './Menu';
import './style.css'
import Menu from './Menu';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);



root.render(<BrowserRouter><App/></BrowserRouter>);