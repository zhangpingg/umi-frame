import { useEffect, useRef, useState } from 'react';
import { Table, Button } from 'antd';
import { dataList } from './const';

const TableRoll = () => {
  let timerInterval: any;
  let timerTimeout: any;
  const tableRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<any[]>();
  // const [bodyHeight, setBodyHeight] = useState(0);  // 179

  /** 表格列 */
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  /** 模拟接口 */
  const apiFn = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataList);
      }, 1000);
    });
  };
  /** 获取表格数据 */
  const getDataList = async () => {
    setLoading(true);
    const res: any = await apiFn();
    setList(res);
    setLoading(false);
    // getBodyHeight();
  };
  /** 获取表格内容高度 */
  // const getBodyHeight = () => {
  //   if (tableRef && tableRef.current) {
  //     const tableBodyDom = tableRef.current.querySelectorAll('.zp-ant-table-tbody')[0];
  //     const { clientHeight } = tableBodyDom;
  //     setBodyHeight(clientHeight);
  //   }
  // }
  /** 定时器滚动事件 */
  const scrollFn1 = () => {
    if (tableRef && tableRef.current) {
      const tableBodyDom =
        tableRef.current.querySelectorAll('.zp-ant-table-body')[0];
      timerInterval = setInterval(() => {
        const oldVal = tableBodyDom.scrollTop;
        const newVal = oldVal + 5;
        tableBodyDom.scrollTop = newVal;
        if (oldVal == tableBodyDom.scrollTop) {
          clearInterval(timerInterval);
          // 2秒后才执行滚动
          timerTimeout = setTimeout(() => {
            tableBodyDom.scrollTop = 0;
            scrollFn1();
            clearInterval(timerTimeout);
          }, 2000);
        }
      }, 500);
    }
  };
  const scrollEle = document.querySelector('.zp-ant-table-body');
  /** 帧滚动事件 */
  const scrollFn2 = () => {
    const scrollSpeed = 1; // 滚动速度：一帧滚动距离（单位：像素）
    if (scrollEle) {
      let scrolledDistance = 0;
      const { clientHeight, scrollHeight } = scrollEle;
      console.log(11, clientHeight);
      console.log(22, scrollHeight);
      const maxScrollTop = scrollHeight - clientHeight;
      // 自动滚动
      const autoScroll = () => {
        scrolledDistance = Math.min(
          scrolledDistance + scrollSpeed,
          maxScrollTop,
        ); // 超过最大滚动距离,以最大滚动距离为准
        if (scrolledDistance >= maxScrollTop) {
          scrolledDistance = 0; // 滚动到顶部
        }
        scrollEle.scrollTop = scrolledDistance;
        window.requestAnimationFrame(autoScroll);
      };
      window.requestAnimationFrame(autoScroll);
    }
  };
  /** 帧滚动 */
  // scrollFn2()

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={list}
        loading={loading}
        pagination={false}
        scroll={{ y: 100 }}
        ref={tableRef}
      />
      <Button type="primary" onClick={scrollFn1}>
        定时器滚动
      </Button>{' '}
      <br />
      <Button type="primary" onClick={scrollFn2}>
        帧滚动
      </Button>
    </div>
  );
};

export default TableRoll;
