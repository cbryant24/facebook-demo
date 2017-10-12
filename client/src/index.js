import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom'
import rootReducer from './components/reducers'

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware( rootReducer )}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
