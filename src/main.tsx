import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reflect-metadata';
import 'tw-elements';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
