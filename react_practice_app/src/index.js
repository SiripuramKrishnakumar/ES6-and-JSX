import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './App';

const root_div = ReactDOM.createRoot(document.getElementById('root'));

root_div.render(
<React.StrictMode>
  <MyApp />
</React.StrictMode>

);