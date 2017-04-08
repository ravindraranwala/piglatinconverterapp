import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PigLatinReducer from './reducer_piglatin';

const rootReducer = combineReducers({
  piglatin: PigLatinReducer,
  form: formReducer
});

export default rootReducer;
