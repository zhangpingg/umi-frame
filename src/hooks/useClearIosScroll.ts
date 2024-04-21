// 清除IOS滚动问题

const useClearIosScroll = (props: any) => {
  const { forbidList = [], scrollList = [] } = props;
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
    const scrollDomList = scrollList.map((item: string) =>
      document.querySelector(item),
    );
    scrollDomList.map((dom: any) => {
      if (dom) {
        // 初次打开弹框的时候，初始化数据，滚动条置为1
        dom.style.overflow = 'scroll';
        dom.scrollTop = 1;
        dom.addEventListener('scroll', () => {
          setScrollPosition(dom);
        });
      }
    });
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
    const scrollDomList = scrollList.map((item: string) =>
      document.querySelector(item),
    );
    scrollDomList.map((dom: any) => {
      if (dom) {
        dom.removeEventListener('scroll', setScrollPosition);
      }
    });
  };

  return {
    addTouchmove,
    removeTouchmove,
  };
};

export default useClearIosScroll;
