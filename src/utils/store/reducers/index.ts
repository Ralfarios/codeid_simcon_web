// This file is for combining multiple reducer into one.
// Add here if you want to add more reducer.
import { combineReducers } from 'redux';

import contactReducer from './contactReducer';
// Import reducer here

const rootReducers: any = combineReducers({
  contact: contactReducer
  // Name the reducer's State and target the imported reducer
});

export default rootReducers;
