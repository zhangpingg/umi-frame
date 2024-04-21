import React, { useRef } from 'react';
import { Button } from 'antd';
import DemoModal from './demoModal';
import styles from './index.module.less';

const Index = () => {
  const demoModalRef: any = useRef();

  const openModal = () => {
    demoModalRef.current.openCloseModal(true);
  };

  return (
    <div className={styles.msii}>
      父页面内容
      <br />
      <Button onClick={openModal}>打开弹框</Button>
      <DemoModal ref={demoModalRef} />
    </div>
  );
};

export default Index;
