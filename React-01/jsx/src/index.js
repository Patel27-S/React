// This is the first .js file that gets executed in the
// React App.

// 1) Import React and React DOM Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// 2) Get a reference to the div with the ID Root+
const el = document.getElementById('root');

// 3) Tell React to take control of that elememt
const root = ReactDOM.createRoot(el);

// 4) Create a Component.
// A component is a function that returns some jsx

// 5) Show the component on screen.
root.render(<App/>);