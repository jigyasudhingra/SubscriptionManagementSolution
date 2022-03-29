import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Stores';
import { StoreProvider } from 'easy-peasy';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';



ReactDOM.render(
    <StoreProvider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </StoreProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
