import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

import App from './App';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<BrowserRouter>
<nav class="nav_principal">
    <div class="wrapper">
        <ul class="animate">
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
            <li><span class="dot"></span></li>
          </ul>
    </div>
</nav>
<App />
</BrowserRouter>
</React.StrictMode>
);