import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducerCreater from './reducerCreater';
import mutationCreater from './mutationCreater';
import logger from './logger';

let middleware = [thunkMiddleware];

const defaultOption = {
  logger: false,
};

const storeCreater = (modules, option = defaultOption) => {
  if (!modules || Object.prototype.toString.call(modules) !== '[object Object]') {
    throw new Error('parameter modules is required but not found!');
  }

  if (option.logger && logger) {
    middleware = [...middleware, logger];
  }

  const reducers = reducerCreater(modules);
  const store = createStore(reducers, applyMiddleware(...middleware));
  const mapMutations = mutationCreater(store, modules);
  return {
    store,
    mapMutations,
    reducers,
  };
};

export default storeCreater;
