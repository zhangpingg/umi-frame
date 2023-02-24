import { Button, Spin } from 'antd';
import { useTableReducer } from '@/hooks';

const UseTableReducerDemo = () => {
  const [{ isLoading, data, total, pageIndex, pageSize, params }, dispatch] =
    useTableReducer({
      data: [],
      pageIndex: 1,
      pageSize: 20,
      isLoading: false,
      total: 0,
      params: {},
    });

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
  /** 获取数据 */
  const getData = async (conditionParams?: any) => {
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
  /** 查询 */
  const searchFn = async () => {
    getData();
  };
  /** 重置 */
  const resetFn = () => {
    getData({
      pageIndex: 1,
      pageSize: 20,
      c: undefined,
      d: undefined,
    });
  };
  /** 条件查询 */
  const conditionSearchFn = () => {
    getData({ c: 1, d: 2 });
  };
  /** 分页查询 */
  const pageSearchFn = () => {
    getData({ pageIndex: 2, pageSize: 3 });
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

      <Button type="primary" onClick={searchFn}>
        查询
      </Button>
      <br />
      <Button type="primary" onClick={resetFn}>
        重置
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
