import { ReducerWithoutAction, useReducer } from 'react';

interface IObject {
  [key: string]: any;
}
interface ITableReducer extends ReducerWithoutAction<any> {
  data?: any[];
  pageIndex?: string | number;
  pageSize?: string | number;
  isLoading?: boolean;
  total?: number;
  initParams?: IObject;
}

const tableReducer = (state: IObject, action: IObject) => {
  switch (action.type) {
    // 进入页面首次拉取数据前的loading打开
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    // 当前页码发生变化时的处理
    case 'PAGE_INDEX':
      return {
        ...state,
        isLoading: true,
        pageIndex: action.payload,
      };
    // 每页条数发生变化时的处理
    case 'PAGE_SIZE':
      return {
        ...state,
        isLoading: true,
        pageSize: action.payload,
      };
    // 接口请求数据成功时的处理
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };
    // 接口请求数据失败时的处理
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        data: [],
        total: 0,
      };
    // 新增删除假数据时的处理（此时只修改data其他均不发生变动）
    case 'CHANGE_DATA':
      return {
        ...state,
        data: action.payload.data,
      };
    // 只关闭loading, 不做其他处理
    case 'CLOSE_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    // 修改列表接口参数
    case 'CHANGE_PARAMS':
      return {
        ...state,
        params: action.payload?.params || {},
      };
    default:
      return {
        data: [],
        pageIndex: 1,
        pageSize: 10,
        isLoading: false,
        total: 0,
        params: {},
      };
  }
};

const useTableReducer: ITableReducer = (
  defaultPageSize = 10,
  initParams = {},
) => {
  const [{ data, pageIndex, pageSize, isLoading, total, params }, dispatch] =
    useReducer(tableReducer, {
      data: [],
      pageIndex: 1,
      pageSize: defaultPageSize,
      isLoading: false,
      total: 0,
      params: initParams || {},
    });

  return [
    {
      isLoading,
      data,
      total,
      pageIndex,
      pageSize,
      params,
    },
    dispatch,
  ];
};

export default useTableReducer;
