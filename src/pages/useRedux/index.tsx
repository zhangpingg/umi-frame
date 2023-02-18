import { useSelector, useDispatch } from 'react-redux';
import { add, reduce, updateUser } from '@/store/reducer/user';

const UseRedux = () => {
  // useSelector 替代 mapStateToProps，从store中提取state数据
  // useDispatch 替代 mapDispatchToProps，从store中获取dispatch方法的引用
  const { age, info } = useSelector((state: any) => state?.publicRedux.USER);
  const dispatch = useDispatch();

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

export default UseRedux;
