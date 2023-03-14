import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from "react-router-dom";
import './styles/main.scss';
import './scripts/main.js';
//  window.localBase = 'http://localhost:1337';

// console.log(window.localBase);

const root = ReactDOM.createRoot(document.getElementById('root'));
 


root.render(<BrowserRouter> <AppRouter /> </BrowserRouter>);

