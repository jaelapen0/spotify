import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return (
    createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(
        applyMiddleware(thunk, logger)
      )
    )
    
  )
};

export default configureStore;