import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, reduce, updateUser } from '@/store/reducer/user';

const PageB = () => {
  const dispatch = useDispatch();
  const { age, info } = useSelector((state: any) => state?.publicRedux.USER);

  return (
    <div>
      <p>@reduxjs/toolkit 使用</p>
      <p>
        年龄：{age}、{JSON.stringify(info)}
      </p>

      <button onClick={() => dispatch(add())}>每次增加1</button>
      <button onClick={() => dispatch(reduce(2))}>每次减少2</button>
      <button
        onClick={() => {
          dispatch(updateUser({ name: 'Tom' }));
        }}
      >
        改名
      </button>
      <button
        onClick={() => {
          dispatch(updateUser({ job: '自由职业者' }));
        }}
      >
        转行
      </button>
    </div>
  );
};

export default PageB;
