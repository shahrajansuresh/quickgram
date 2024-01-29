import {combineReducers} from '@reduxjs/toolkit';
import postSlice from './features/slices/postSlice';
import userSlice from './features/slices/userSlice';

export const rootReducer = combineReducers({
  userList: userSlice,
  postList: postSlice,
});
