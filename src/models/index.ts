import * as api from '@/api';

const model = {
  namespace: 'global',
  state: {
    userObj: {
      name: '暂无',
      age: 0,
    },
    userList: [],
  },
  // 同步修改数据
  reducers: {
    changeUser(state: any, { payload }: any) {
      const _state = { ...state };
      _state.userObj = { ..._state.userObj, ...payload };
      return _state; // 只能返回一个完整的state对象，和 @reduxjs/toolkit 有点区别
    },
  },
  // 异步修改数据
  effects: {
    // 调用接口获取用户信息
    *getUser({ payload, callback }: any, { call, put }: any): any {
      try {
        // const res = yield call(api.getSystemUser, payload);     // payload: 接口参数
        const res = { name: '李四', age: 22 };
        yield put({
          type: 'changeUser', // 调用reducers中的方法
          payload: res, // 传入请求的数据
        });
        callback?.(res);
      } catch (e) {}
    },
  },
};

export default model;
