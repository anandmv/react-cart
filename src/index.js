import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
