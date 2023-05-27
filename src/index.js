import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import './styles/main.scss';



const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  root
);