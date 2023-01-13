import React, { useEffect, useRef, useState } from 'react';
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
    return new Promise((resolve, reject) => {
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
  /** 滚动事件 */
  const scrollFn = () => {
    if (tableRef && tableRef.current) {
      const tableBodyDom =
        tableRef.current.querySelectorAll('.zp-ant-table-body')[0];
      timerInterval = setInterval(() => {
        let oldVal = tableBodyDom.scrollTop;
        let newVal = oldVal + 5;
        tableBodyDom.scrollTop = newVal;
        if (oldVal == tableBodyDom.scrollTop) {
          clearInterval(timerInterval);
          // 2秒后才执行滚动
          timerTimeout = setTimeout(() => {
            tableBodyDom.scrollTop = 0;
            scrollFn();
            clearInterval(timerTimeout);
          }, 2000);
        }
      }, 500);
    }
  };

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
      <Button type="primary" onClick={scrollFn}>
        滚动
      </Button>
    </div>
  );
};

export default TableRoll;
