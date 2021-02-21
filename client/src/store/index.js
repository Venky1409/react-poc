import {combineReducers} from 'redux';
import profileReducer from './profile.reducer';
import ratesReducer from './rates.reducer';
import conversionReducer from './conversion.reducer';


const rootReducer= combineReducers({
  profileReducer,
  ratesReducer,
  conversionReducer
});

export default rootReducer;