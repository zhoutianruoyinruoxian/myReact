import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { defaultFormatUtc } from 'moment';
import modules from './modules';

console.log(modules,222)
const defaultState = {
  title: 'default',
};

export const constant = {
  change_title: 'change_title',
};

const reducer = {

  title(state = defaultState.title, action) {
    switch (action.type) {
      case constant.change_title:
        return action.data;
      default:
        return state;
    }
  }
}



export const reducers = combineReducers(reducer);

export const actionCreater = (type, data) => ({
  type,
  data,
});

let middleware = [thunkMiddleware];

// if (process.env.NODE_ENV !== 'production') {
//   const logger = ({ getState }) => next => action => {
//     console.log('will dispatch', getState());
//     next(action);
//     console.log('state after dispatch', getState());
//   };
//   middleware = [...middleware, logger];
// }

const store = createStore(reducers, defaultState, applyMiddleware(...middleware));



export default store;
