import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';

// 2) Get a reference to the div with the ID Root
const el = document.getElementById('root');

// 3) Tell React to take control of that elememt
const root = ReactDOM.createRoot(el);

root.render(<App/>);