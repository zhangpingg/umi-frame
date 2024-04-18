import { useEffect, forwardRef, useState, useImperativeHandle } from 'react';
import { Drawer } from 'antd';
import styles from './index.module.less';

const Index = forwardRef((props, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  // 阻止默认事件
  const preventDefault = (e: any) => {
    e.preventDefault();
  };
  // 设置滚动位置
  const setScrollPosition = (dom: any) => {
    const currentScrollTop = dom.scrollTop;
    if (currentScrollTop < 1) {
      dom.scrollTop = 1;
    }
    if (dom.clientHeight + dom.scrollTop >= dom.scrollHeight) {
      dom.scrollTop = dom.scrollTop - 1;
    }
  };
  // 添加touchmove
  const addTouchmove = () => {
    // 阻止遮盖层的默认事件
    document
      ?.querySelector('.zp-ant-drawer-mask')
      ?.addEventListener('touchmove', preventDefault, { passive: false });
    // 阻止关闭按钮的默认事件
    document
      ?.querySelector('.dm-main-close')
      ?.addEventListener('touchmove', preventDefault, { passive: false });
    const listDom: any = document.querySelector('.dm-main-list');
    if (listDom) {
      // 初次打开弹框的时候，初始化数据，滚动条置为1
      listDom.style.overflow = 'scroll';
      listDom.scrollTop = 1;
      listDom.addEventListener('scroll', () => {
        setScrollPosition(listDom);
      });
    }
  };
  // 打开弹框
  const openCloseModal = (flag: boolean) => {
    if (!flag) {
      document
        ?.querySelector('.zp-ant-drawer-mask')
        ?.removeEventListener('touchmove', preventDefault);
      document
        ?.querySelector('.dm-main-close')
        ?.removeEventListener('touchmove', preventDefault);
      window.removeEventListener('scroll', setScrollPosition);
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
      height="400"
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
