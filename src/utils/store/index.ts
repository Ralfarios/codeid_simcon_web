import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './reducers';

const store: any = createStore(rootReducers, applyMiddleware(thunk));

export default store;
