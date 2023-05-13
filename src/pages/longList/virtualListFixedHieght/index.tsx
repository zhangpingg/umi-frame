import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './index.module.less';

const mockData = new Array(10000).fill('').map((item, index) => index + 1); // 模拟后台返回数据
const itemHeight = 50; // 每项高度

const VirtualListFixedHieght = () => {
  const listRef = useRef<any>();
  const [allListData, setAllListData] = useState<number[]>([]); // 所有列表数据
  const [visibleListData, setVisiblListeData] = useState<number[]>([]); // 真实显示列表数据
  const [startOffset, setStartOffset] = useState(0); // 偏移量

  /** 列表总高度 */
  const listHeight = useMemo(() => {
    return allListData.length * itemHeight;
  }, [allListData, itemHeight]);
  /** 获取显示的列表项个数 */
  const getVisibleItemCount = useCallback(() => {
    return Math.ceil(listRef.current?.offsetHeight / itemHeight);
  }, [listRef, itemHeight]);
  /** 滚动列表 */
  const scrollList = () => {
    const scrollTop = listRef.current.scrollTop; // 当前滚动位置
    const start = Math.floor(scrollTop / itemHeight);
    const end = start + getVisibleItemCount();
    const sliceData = allListData.slice(
      start,
      Math.min(end, allListData.length),
    );
    setVisiblListeData(sliceData);
    setStartOffset(start * itemHeight); // 1)划过一格才会有偏移量
    // setStartOffset(scrollTop - (scrollTop % itemHeight)); // 2)
  };

  useEffect(() => {
    setAllListData(mockData);
    const sliceData = mockData.slice(0, getVisibleItemCount());
    setVisiblListeData(sliceData);
  }, []);

  return (
    <div ref={listRef} className={styles['container']} onScroll={scrollList}>
      {/* 用于占位，形成滚动条 */}
      <div
        className={styles['container-scroll']}
        style={{ height: `${listHeight}px` }}
      ></div>
      <ul
        className={styles['container-realList']}
        style={{ transform: `translate3d(0,${startOffset}px,0)` }}
      >
        {visibleListData.map((item) => {
          return (
            <li key={item} className={styles['container-realList-item']}>
              列表项 {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VirtualListFixedHieght;
