import { createSlice } from '@reduxjs/toolkit';

// 数据的初始值
const initialState = {
  age: 10,
  info: {
    name: 'zp',
    job: '前端',
  },
};

const userSlice = createSlice({
  name: 'user', // 命名空间，在调用action的时候会默认的为：name/actionName
  initialState,
  reducers: {
    // 同步修改数据
    // 第一个参数：当前的 state 数据
    // 第二个参数：{type:"", payload:<传进来的内容，可以是值，也可以是对象>}
    add(state) {
      state.age += 1;
    },
    reduce(state, actions) {
      // actions => {type:"", payload:xxx}
      state.age -= actions.payload; // 可以直接赋值给某个属性，也可以 return 返回一个整体对象
      // return { ...state, age: state.age - actions.payload }
    },
    updateUser(state, { payload }) {
      state.info = {
        ...state.info,
        ...payload,
      };
    },
  },
});

// 导出所有的 action 方法，供页面使用
export const { add, reduce, updateUser } = userSlice.actions;
export default userSlice.reducer; // 导出 reducer，供在 store 里面使用
