import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from "react-router-dom";
import './styles/main.scss';
import Mj from './scripts/main.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
console.log(Mj.filebase);

root.render(<BrowserRouter> <AppRouter /> </BrowserRouter>);

