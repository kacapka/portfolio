import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';

import configStore from './store';
const store = configStore();

const rootEl = document.getElementById('app');

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider> 
    , rootEl
);

registerServiceWorker();
