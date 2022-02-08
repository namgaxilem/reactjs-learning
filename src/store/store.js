import { 
  configureStore, 
  createAction, 
  createReducer,
  createSlice
} from '@reduxjs/toolkit';

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

const rootReducer = createReducer({ count: 0 }, {
  [increment]: state => ({ count: state.count + 1 }),
  [decrement]: state => ({ count: state.count - 1 })
});

const store = configureStore({
  reducer: rootReducer
});

export { increment };
export default store;