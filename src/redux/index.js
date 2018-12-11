import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import modules from './modules';
import reducerCreater from './config/reducerCreater';
import mutationCreater from './config/mutationCreater';


let middleware = [thunkMiddleware];

// if (process.env.NODE_ENV !== 'production') {
//   const logger = ({ getState }) => next => action => {
//     console.log('will dispatch', getState());
//     next(action);
//     console.log('state after dispatch', getState());
//   };
//   middleware = [...middleware, logger];
// }

export const reducers = reducerCreater(modules);
const store = createStore(reducers, applyMiddleware(...middleware));



export const mutationList = mutationCreater(store, modules);

export default store;
