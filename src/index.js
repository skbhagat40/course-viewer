import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './course-viewer/reducers';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga'
import { initSagas } from './initSagas';


// const store = createStore(rootReducer, applyMiddleware(thunk));
 const getStore = () => {
    const sagaMiddleWare = createSagaMiddleWare();
    const middleWares = [sagaMiddleWare, thunk];
    const composables = [composeWithDevTools(applyMiddleware(...middleWares))]
    const enhancer = compose(
        ...composables
    );
    const store = createStore(
        rootReducer,
        enhancer
    );
    initSagas(sagaMiddleWare);
    return store;
};
const store = getStore();

ReactDOM.render(< Provider store={store} >
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();