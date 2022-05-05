import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import titleReducer from './title/titleSlice';
import userReducer from './user/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    title: titleReducer,
    user: userReducer
  }
})