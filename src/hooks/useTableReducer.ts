// 前端自己筛选数据
import { useReducer } from 'react';

interface IObject {
  [key: string]: any;
}

const tableReducer = (state: IObject, action: IObject) => {
  switch (action.type) {
    // 进入页面首次拉取数据前的loading
    case 'INIT':
      return {
        ...state,
        loading: true,
      };
    // 接口请求数据成功时的处理
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    // 接口请求数据失败时的处理
    case 'ERROR':
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    // 新增删除假数据时的处理（此时只修改data其他均不发生变动）
    case 'CHANGE_DATA':
      return {
        ...state,
        ...action.payload,
      };
    // 只关闭loading, 不做其他处理
    case 'CLOSE_LOADING':
      return {
        ...state,
        loading: false,
      };
    // 清空数据
    case 'CLEAR':
      return {
        loading: false,
        ...action.payload,
      };
    default:
      return {};
  }
};

const useTableReducer = (initParams?: IObject) => {
  const [stateObj, dispatch] = useReducer(tableReducer, { ...initParams });
  return [stateObj, dispatch];
};

export default useTableReducer;
