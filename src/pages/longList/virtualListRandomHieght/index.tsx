import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './index.module.less';

const mockData = new Array(10000).fill('').map((item, index) => index + 1); // 模拟后台返回数据
const itemHeight = 50; // 预估高度（estimatedItemSize）

const VirtualListRandomHieght = () => {
  const containerRef = useRef<any>(null);
  const listWrapRef = useRef<any>(null);
  const [allListData, setAllListData] = useState<number[]>([]); // 所有列表数据
  const [visibleListData, setVisiblListeData] = useState<number[]>([]); // 真实显示列表数据
  const [startOffset, setStartOffset] = useState(0); // 偏移量
  // 记录每一项的位置信息
  const [positions, setPositions] = useState<any[]>([]);

  /** 列表总高度 */
  const listHeight = useMemo(() => {
    return positions[positions.length - 1]?.bottom;
  }, [positions]);
  /** 获取显示的列表项个数 */
  const getVisibleItemCount = useCallback(() => {
    return Math.ceil(containerRef.current?.offsetHeight / itemHeight);
  }, [containerRef, itemHeight]);
  /** 滚动列表 */
  const scrollList = () => {
    const scrollTop = containerRef.current.scrollTop; // 当前滚动位置
    const start = Math.floor(scrollTop / itemHeight);
    const end = start + getVisibleItemCount();
    const sliceData = allListData.slice(
      start,
      Math.min(end, allListData.length),
    );
    setVisiblListeData(sliceData);
    setStartOffset(scrollTop - (scrollTop % itemHeight));
  };
  /** 初始化位置信息 */
  const initPositions = () => {
    const list = allListData.map((item, index) => {
      return {
        index,
        height: itemHeight,
        top: index * itemHeight,
        bottom: (index + 1) * itemHeight,
      };
    });
    setPositions(list);
  };
  const updateItemsSize = () => {
    const lis = Array.from(listWrapRef.current.children);
    lis.forEach((item: any) => {});
    console.log(listWrapRef.current.children);
  };

  useEffect(() => {
    setAllListData(mockData);
    setVisiblListeData(mockData.slice(0, getVisibleItemCount()));
    initPositions();
    updateItemsSize();
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles['container']}
      onScroll={scrollList}
    >
      {/* 用于占位，形成滚动条 */}
      <div
        className={styles['container-scroll']}
        style={{ height: `${listHeight}px` }}
      ></div>
      <ul
        ref={listWrapRef}
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

export default VirtualListRandomHieght;
