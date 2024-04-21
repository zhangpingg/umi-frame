// 清除IOS滚动问题

const useClearIosScroll = (props: any) => {
  const { forbidList = [], scrollName = '' } = props;
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
    const forbidDomList = forbidList.map((classNameStr: string) => {
      return document.querySelector(classNameStr);
    });
    forbidDomList.map((dom: any) => {
      if (dom) {
        dom.addEventListener('touchmove', preventDefault, {
          passive: false,
        });
      }
    });
    const listDom = document.querySelector(scrollName);
    if (listDom) {
      // 初次打开弹框的时候，初始化数据，滚动条置为1
      listDom.style.overflow = 'scroll';
      listDom.scrollTop = 1;
      listDom.addEventListener('scroll', () => {
        setScrollPosition(listDom);
      });
    }
  };
  // 移除touchmove
  const removeTouchmove = () => {
    const forbidDomList = forbidList.map((classNameStr: string) => {
      return document.querySelector(classNameStr);
    });
    forbidDomList.map((dom: any) => {
      if (dom) {
        dom.removeEventListener('touchmove', preventDefault, {
          passive: false,
        });
      }
    });
    const listDom = document.querySelector(scrollName);
    if (listDom) {
      listDom.removeEventListener('scroll', setScrollPosition);
    }
  };

  return {
    addTouchmove,
    removeTouchmove,
  };
};

export default useClearIosScroll;
