import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {BASE_PATH} from "./content/config";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename={BASE_PATH}>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
