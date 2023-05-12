import { Tabs } from 'antd';
import TimeFragmentation from './timeFragmentation';
import VirtualListFixedHieght from './virtualListFixedHieght';
import VirtualListRandomHieght from './virtualListRandomHieght';

const LongList = () => {
  const tabsItems = [
    {
      label: '时间分片',
      key: '1',
      children: <TimeFragmentation />,
    },
    {
      label: '虚拟列表-固定高度',
      key: '2',
      children: <VirtualListFixedHieght />,
    },
    {
      label: '虚拟列表-随机高度',
      key: '3',
      children: <VirtualListRandomHieght />,
    },
  ];

  return (
    <Tabs
      type="card"
      defaultActiveKey="1"
      style={{ margin: '10px 0 0 10px' }}
      items={tabsItems}
    ></Tabs>
  );
};

export default LongList;
