import { combineReducers } from '@reduxjs/toolkit';
import { loginApi } from 'api/login';
import authSlice from './auth';

export const reducers = combineReducers({
  auth: authSlice,
  [loginApi.reducerPath]: loginApi.reducer,
});
