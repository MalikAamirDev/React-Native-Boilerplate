import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './Reducers/AuthReducer';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export default store;
