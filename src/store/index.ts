import { configureStore } from '@reduxjs/toolkit';
import allReducer from './reducer';

export default configureStore({
  reducer: {
    publicRedux: allReducer,
  },
});
