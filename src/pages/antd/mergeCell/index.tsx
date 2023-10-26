import { Table } from 'antd';
import { columns, resList } from './const.js';

const MergeCell = () => {
  return (
    <div>
      <h2>合并单元格</h2>
      <Table columns={columns} dataSource={resList} bordered />
    </div>
  );
};

export default MergeCell;
