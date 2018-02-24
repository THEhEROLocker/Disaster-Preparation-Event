import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware} from 'react-router-redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createHashHistory'
import createRoutes from './routes'
import reducers from './reducers/index'

const history = createHistory();

const middleware = routerMiddleware(history)
const store = createStore(
  reducers,
  applyMiddleware(middleware)
)

ReactDOM.render(
    <Provider store={store}>
        {createRoutes(store, history)}
    </Provider>
    ,document.getElementById('root')
);
