import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './fonts.css';
import './index.css';
import 'swiper/css';

import { Authentication } from './core/context/auth.context';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const Client = ()=> <BrowserRouter ><App /></BrowserRouter>
root.render(<Authentication><Client/></Authentication>);

reportWebVitals();
