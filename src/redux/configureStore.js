import { configureStore } from '@reduxjs/toolkit';

import greetings from './greetings/greetings';

const store = configureStore({
  reducer: greetings,
});

export default store;
