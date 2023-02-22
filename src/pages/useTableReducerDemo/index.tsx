import { Button, Spin } from 'antd';
import useTableReducer from '@/hooks/useTableReducer';

const UseTableReducerDemo = () => {
  const [{ isLoading, data, total, pageIndex, pageSize, params }, dispatch] =
    useTableReducer(20);

  /** 打开loading */
  const loadingFn = () => {
    dispatch({ type: 'LOADING' });
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
  /** 模拟接口 */
  const ApiFn = (params: any) => {
    console.log('参数:', params);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let res = {
          pageIndex: params.pageIndex,
          pageSize: params.pageSize,
          records: [{ a: 1 }, { a: 2 }],
          total: 100,
        };
        resolve(res);
      }, 2000);
    });
  };
  /** 查询 */
  const searchFn = async (conditionParams: any) => {
    try {
      dispatch({ type: 'LOADING' }); // 打开loading
      const res: any = await ApiFn({
        pageIndex,
        pageSize,
        ...params,
        ...conditionParams,
      });
      dispatch({
        type: 'SUCCESS', // 会自动关闭loading
        payload: {
          data: res?.records,
          total: res?.total,
          pageIndex: res?.pageIndex,
          pageSize: res?.pageSize,
          params: { ...params, ...conditionParams },
        },
      });
    } catch (err) {
      dispatch({ type: 'ERROR' }); // 会自动关闭loading
    } finally {
      dispatch({ type: 'CLOSE_LOADING' });
    }
  };
  /** 条件查询 */
  const conditionSearchFn = () => {
    searchFn({ c: 1, d: 2 });
  };
  /** 分页查询 */
  const pageSearchFn = () => {
    searchFn({ pageIndex: 2, pageSize: 3 });
  };

  return (
    <div>
      <Spin spinning={isLoading}>
        <div style={{ height: '100px', border: '1px solid #000' }}>
          表格数据：{JSON.stringify(data)} <br />
          total: {total}
          <br />
          pageIndex: {pageIndex}
          <br />
          pageSize: {pageSize}
          <br />
        </div>
      </Spin>

      <Button type="primary" onClick={loadingFn}>
        打开loading
      </Button>
      <br />
      <Button type="primary" onClick={successFn}>
        成功（存数据）
      </Button>
      <br />
      <Button type="primary" onClick={errorFn}>
        失败
      </Button>
      <br />
      <Button type="primary" onClick={changeDataFn}>
        改变数据（单纯的改变data）
      </Button>
      <br />
      <Button type="primary" onClick={closeLoadingFn}>
        关闭 loading
      </Button>
      <br />
      <Button type="primary" onClick={clearFn}>
        清空数据
      </Button>
      <br />
      <br />

      <Button type="primary" onClick={searchFn}>
        查询
      </Button>
      <br />
      <Button type="primary" onClick={conditionSearchFn}>
        条件查询
      </Button>
      <br />
      <Button type="primary" onClick={pageSearchFn}>
        分页查询
      </Button>
      <br />
    </div>
  );
};

export default UseTableReducerDemo;
