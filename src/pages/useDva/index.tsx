import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'dva';

const UseDva = () => {
  const { userObj } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  /** 改变用户信息 */
  const changeUserInfo = useCallback(() => {
    dispatch({
      type: 'global/changeUser',
      payload: { name: '张三' },
    });
  }, []);
  /** 获取用户数据 */
  const getUserInfo = useCallback(() => {
    dispatch({
      type: 'global/getUser',
      payload: { userId: 1 },
      callback: (data: any) => {
        console.log('回调函数：', data); // 借用接口后，返回的数据
      },
    });
  }, []);

  return (
    <div>
      <p>{JSON.stringify(userObj)}</p>
      <button onClick={changeUserInfo}>改变用户信息</button>
      <button onClick={getUserInfo}>获取用户信息</button>
    </div>
  );
};

export default UseDva;
