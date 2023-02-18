import { Button, Spin } from 'antd';
import useTableReducer from '@/hooks/useTableReducer';

const UseTableReducerDemo = () => {
  const [{ data = [], loading = false }, dispatch] = useTableReducer();

  /** 初始化 */
  const initFn = () => {
    dispatch({ type: 'INIT' });
  };
  /** 成功 */
  const successFn = () => {
    dispatch({
      type: 'SUCCESS',
      payload: {
        data: [{ a: 1, b: 2 }],
      },
    });
  };
  /** 失败 */
  const errorFn = () => {
    dispatch({ type: 'ERROR' });
  };
  /** 改变数据 */
  const changeDataFn = () => {
    dispatch({
      type: 'CHANGE_DATA',
      payload: {
        data: [{ a: 3, b: 4 }],
      },
    });
  };
  /** 关闭 loading */
  const closeLoadingFn = () => {
    dispatch({ type: 'CLOSE_LOADING' });
  };
  /** 清空数据 */
  const clearFn = () => {
    dispatch({ type: 'CLEAR' });
  };

  return (
    <div>
      <Spin spinning={loading}>
        <div style={{ height: '100px', border: '1px solid #000' }}>
          表格数据：{JSON.stringify(data)}
        </div>
      </Spin>
      <Button type="primary" onClick={initFn}>
        初始化
      </Button>{' '}
      <br />
      <Button type="primary" onClick={successFn}>
        成功（存数据）
      </Button>{' '}
      <br />
      <Button type="primary" onClick={errorFn}>
        失败
      </Button>{' '}
      <br />
      <Button type="primary" onClick={changeDataFn}>
        改变数据（单纯的改变）
      </Button>{' '}
      <br />
      <Button type="primary" onClick={closeLoadingFn}>
        关闭 loading
      </Button>{' '}
      <br />
      <Button type="primary" onClick={clearFn}>
        清空数据
      </Button>{' '}
      <br />
    </div>
  );
};

export default UseTableReducerDemo;
