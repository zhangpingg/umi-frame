import { createSlice } from '@reduxjs/toolkit';

// 数据的初始值
const initialState = {
  IMAGES_FILES: [], // 图片文件
  EXCEL_FILES: [], // excel文件
};

const filesSlice = createSlice({
  name: 'files', // 命名空间，在调用action的时候会默认的为：name/actionName
  initialState,
  reducers: {
    // 同步修改数据
    // 第一个参数：当前的 state 数据
    // 第二个参数：{type:"", payload:<传进来的内容，可以是值，也可以是对象>}
    // 可以直接赋值给某个属性，也可以 return 返回一个整体对象
    saveFile(state, { payload }) {
      return { ...state, ...payload };
    },
    clearFiles() {
      return { ...initialState };
    },
  },
});

// 导出所有的 action 方法，供页面使用
export const { saveFile, clearFiles } = filesSlice.actions;
export default filesSlice.reducer; // 导出 reducer，供在 store 里面使用
