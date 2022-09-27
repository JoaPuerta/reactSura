import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu } from './Menu/Menu.js';
import { Banner } from './Banner/Banner.js';
import { Sipnosis } from './Sipnosis/Sipnosis.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>  
    <Banner/>
    <Sipnosis/>
  </React.StrictMode>
);


