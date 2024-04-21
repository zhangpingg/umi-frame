import { useEffect, forwardRef, useState, useImperativeHandle } from 'react';
import { Drawer } from 'antd';
import { useClearIosScroll } from '@/hooks';
import styles from './index.module.less';

const Index = forwardRef((props, ref) => {
  const { addTouchmove, removeTouchmove } = useClearIosScroll({
    forbidList: ['.zp-ant-drawer-mask', '.dm-main-close'],
    scrollList: ['.dm-main-list'],
  });
  const [open, setOpen] = useState<boolean>(false);

  // 打开弹框
  const openCloseModal = (flag: boolean) => {
    if (!flag) {
      removeTouchmove();
    }
    setOpen(flag);
  };

  /** 暴露给父组件 */
  useImperativeHandle(ref, () => ({
    openCloseModal,
  }));

  useEffect(() => {
    if (open) {
      Promise.resolve().then(() => {
        addTouchmove();
      });
    }
  }, [open]);

  return (
    <Drawer
      placement="bottom"
      closable={false}
      height={400}
      open={open}
      destroyOnClose={true}
      autoFocus={false}
      className={styles['dm']}
    >
      <div className={styles['dm-main']}>
        <div
          className={styles['dm-main-close']}
          onClick={() => openCloseModal(false)}
        >
          关闭
        </div>
        <ul className={styles['dm-main-list']}>
          <li>11</li>
          <li>22</li>
          <li>33</li>
          <li>44</li>
        </ul>
      </div>
    </Drawer>
  );
});

export default Index;
