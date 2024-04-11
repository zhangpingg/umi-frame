import { useEffect, useRef } from 'react';
import styles from './index.module.less';
import DemoModal from './demoModal';

const Index = () => {
  return (
    <div className={styles.msii}>
      父页面内容
      <DemoModal />
    </div>
  );
};

export default Index;
