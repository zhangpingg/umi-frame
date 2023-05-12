import { Tabs } from 'antd';
import TimeFragmentation from './timeFragmentation';
import VirtualListFixedHieght from './virtualListFixedHieght';

const LongList = () => {
  return (
    <Tabs type="card" defaultActiveKey="1" style={{ margin: '10px 0 0 10px' }}>
      <Tabs.TabPane tab={'时间分片'} key="1">
        <TimeFragmentation />
      </Tabs.TabPane>
      <Tabs.TabPane tab={'虚拟列表-固定高度'} key="2">
        <VirtualListFixedHieght />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default LongList;
