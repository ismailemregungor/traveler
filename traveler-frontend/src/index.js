import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap-override.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    {' '}
    <App />{' '}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
