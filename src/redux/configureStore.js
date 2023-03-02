import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import greetings from './greetings/greetings';

const rootReducer = {
  reducer: {
    greetings,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));
export default store;