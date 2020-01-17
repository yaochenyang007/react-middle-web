/*
 * @Author: chenyang.yao
 * @Date: 2020-01-17 16:07:39
 * @LastEditTime : 2020-01-17 16:48:09
 * @LastEditors  : chenyang.yao
 */
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// import registerServiceWorker from './registerServiceWorker';
import reducers from './reducer'
import './config'
import App from './app'
import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();

// registerServiceWorker()

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));