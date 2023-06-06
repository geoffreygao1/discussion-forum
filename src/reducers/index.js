import formReducer from './form-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postList: formReducer
});

export default rootReducer;