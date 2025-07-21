
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
 // Assuming you have a global CSS file
 import { HashRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> 
      <App />
    </HashRouter>
  </React.StrictMode>,
);