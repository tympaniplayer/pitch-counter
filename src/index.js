import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pitchCounter from './reducers/reducers.js';
import App from './components/App';

let store = createStore( pitchCounter );

render( 
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
