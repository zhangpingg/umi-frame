import { useEffect, forwardRef, useState, useImperativeHandle } from 'react';
import { Drawer } from 'antd';
import styles from './index.module.less';

const Index = forwardRef((props, ref) => {
  const [open, setOpen] = useState<boolean>(true);

  // 阻止默认事件
  const preventDefault = (e: any) => {
    e.preventDefault();
  };
  // 添加touchmove
  const addTouchmove = () => {
    document
      ?.querySelector('.dm-layer')
      ?.addEventListener('touchmove', preventDefault, { passive: false });
    document
      ?.querySelector('.dm-main-title')
      ?.addEventListener('touchmove', preventDefault, { passive: false });
    const listDom: any = document.querySelector('.dm-main-list');
    if (listDom) {
      // 初次打开弹框的时候，初始化数据，滚动条置为1
      listDom.style.overflow = 'scroll';
      listDom.scrollTop = 1;
      listDom.addEventListener('scroll', function () {
        const currentScrollTop = listDom.scrollTop;
        if (currentScrollTop < 1) {
          listDom.scrollTop = 1;
        }
        if (listDom.clientHeight + listDom.scrollTop >= listDom.scrollHeight) {
          listDom.scrollTop = listDom.scrollTop - 1;
        }
      });
    }
  };
  // 打开弹框
  const openCloseModal = (flag: boolean) => {
    setOpen(flag);
  };

  /** 暴露给父组件 */
  useImperativeHandle(ref, () => ({
    // 拍瑞t乌
    openCloseModal,
  }));

  useEffect(() => {
    if (open) {
      addTouchmove();
    } else {
      document
        ?.querySelector('.dm-layer')
        ?.removeEventListener('touchmove', preventDefault);
      document
        ?.querySelector('.dm-main-title')
        ?.removeEventListener('touchmove', preventDefault);
    }
  }, [open]);

  return (
    <Drawer
      placement="bottom"
      closable={false}
      height="50%"
      open={open}
      destroyOnClose={true}
      autoFocus={false}
      className={styles['dm']}
    >
      <span className={styles['dm-layer']}></span>
      <div className={styles['dm-main']}>
        <div className={styles['dm-main-title']}>标题</div>
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
