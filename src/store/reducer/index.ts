// 导出所有的 reducer 文件
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';

export default combineReducers({
  FILES: userReducer,
  // XXX: xxxReducer
});
