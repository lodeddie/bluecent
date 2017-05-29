import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  routing: routerReducer
});

export default rootReducer;
