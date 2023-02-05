import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from "react-router-dom";
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter> <AppRouter /> </BrowserRouter>);

