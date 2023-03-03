// setScrollEle(
//   document.querySelector('.xcd-ant-table-body') ||
//     document.querySelector('.xcd-ant-table-tbody'),
// );

// useAutoScroll({
//   scrollEle,
//   scrollSpeed: getBigScreenRolleSpeed() / 60,
//   isBigScreen: mode === 2 ? true : false,
//   delay: getRefreshSpace(),
//   tableLoading,
//   dataLength: dataSource?.length || 0,
//   scrollEndCallback: () => {
//     refreshSummaryList();
//   },
// });

import { useEffect, useRef } from 'react';
interface AutoScrollProps {
  scrollEle: any; // 滚动的元素
  scrollSpeed?: number; // 滚动速度 px/f 一帧多少像素, 与显示器帧率有关
  delay?: number;
  isBigScreen?: boolean;
  scrollEndCallback?: () => void;
  tableLoading?: boolean;
  dataLength: number;
}

let timer: number;

const useAutoScroll = (props: AutoScrollProps) => {
  const {
    scrollEle,
    scrollSpeed = 1, // 目前速度是以帧为单位,速度最好以秒为单位,但前端无法获取帧率的数据同时还要用于其它函数
    isBigScreen, // 是否是大屏
    scrollEndCallback,
    tableLoading,
    delay,
    dataLength,
  } = props;
  const callbackTimerRef = useRef<any>();

  /** 执行-延迟的回调函数 */
  const enforceCallback = () => {
    clearInterval(callbackTimerRef?.current);
    callbackTimerRef.current = setTimeout(() => {
      scrollEndCallback?.();
    }, delay);
    return;
  };

  useEffect(() => {
    if (!isBigScreen || !scrollEle || tableLoading) {
      window.cancelAnimationFrame(timer);
      clearInterval(callbackTimerRef?.current);
      return;
    }
    // 没有数据的时候
    if (dataLength === 0) {
      enforceCallback();
    }
    let scrolledDistance = 0; // 滚动到的位置
    const autoScrollFn = () => {
      const { clientHeight, scrollHeight } = scrollEle;
      // 有数据，但是没有滚动条的时候
      if (
        clientHeight != 0 &&
        scrollHeight != 0 &&
        clientHeight == scrollHeight
      ) {
        enforceCallback();
      }
      const maxScrollTop = scrollHeight - clientHeight;
      scrolledDistance = Math.min(scrolledDistance + scrollSpeed, maxScrollTop); // 超过最大滚动距离,以最大滚动距离为准
      scrollEle.scrollTop = scrolledDistance;
      if (scrolledDistance < maxScrollTop) {
        timer = window.requestAnimationFrame(autoScrollFn);
      }
      // 数据多，可以滚动的情况
      if (
        scrolledDistance != 0 &&
        maxScrollTop != 0 &&
        scrolledDistance == maxScrollTop
      ) {
        enforceCallback();
      }
    };
    timer = window.requestAnimationFrame(autoScrollFn);
  }, [isBigScreen, scrollEle, tableLoading, dataLength]);
};

export { useAutoScroll };
