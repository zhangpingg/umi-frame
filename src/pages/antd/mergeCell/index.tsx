import { Table } from 'antd';
import { columns, resList } from './const.js';

const MergeCell = () => {
  return <Table columns={columns} dataSource={resList} bordered />;
};

export default MergeCell;
