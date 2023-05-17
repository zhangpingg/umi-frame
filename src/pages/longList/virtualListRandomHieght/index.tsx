import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getRandomContent } from './const';
import styles from './index.module.less';

// 模拟后台返回数据
const mockData = new Array(2000).fill('').map((item, index) => ({
  index,
  id: `ID_${index}`,
  value: getRandomContent(10, 100),
}));
const itemHeight = 50; // 预估高度（estimatedItemSize）
const bufferCount = 2; // 缓存区个数

const VirtualListRandomHieght = () => {
  const containerRef = useRef<any>(null);
  const listWrapRef = useRef<any>(null);
  const [allListData, setAllListData] = useState<any[]>([]); // 所有列表数据
  const [visibleListData, setVisiblListeData] = useState<any[]>([]); // 真实显示列表数据
  const [startOffset, setStartOffset] = useState(0); // 偏移量
  // 记录每一项的位置信息
  const [positions, setPositions] = useState<any[]>(() => {
    return mockData.map((item, index) => {
      return {
        index,
        height: itemHeight,
        top: index * itemHeight,
        bottom: (index + 1) * itemHeight,
      };
    });
  });

  /** 列表总高度 */
  const listHeight = useMemo(() => {
    return positions[positions.length - 1]?.bottom;
  }, [positions]);
  /** 获取显示的列表项个数 */
  const getVisibleItemCount = useCallback(() => {
    return Math.ceil(containerRef.current?.offsetHeight / itemHeight);
  }, [containerRef, itemHeight]);
  /** 获取起始索引（二分法查找） */
  const getStartIndex = (list: any[], value: number) => {
    let start = 0;
    let end = list.length - 1;
    let tempIndex = null;
    while (start <= end) {
      const midIndex = Math.floor((start + end) / 2);
      const midValue = list[midIndex].bottom;
      if (midValue === value) {
        return midIndex;
      } else if (midValue < value) {
        start = midIndex + 1;
      } else if (midValue > value) {
        if (tempIndex === null || midIndex < tempIndex) {
          tempIndex = midIndex;
        }
        end = end - 1;
      }
    }
    return tempIndex || 0;
  };
  /** 更新item大小 */
  const updateItemsSize = () => {
    const nodes = Array.from(listWrapRef.current.children);
    nodes.forEach((node: any) => {
      const rect = node.getBoundingClientRect();
      const index = Number(node.getAttribute('data-index'));
      const height = rect.height;
      const dValue = positions[index].height - height;
      // 存在差值
      if (dValue) {
        positions[index].bottom = positions[index].bottom - dValue;
        positions[index].height = height;
        for (let k = index + 1; k < positions.length; k++) {
          positions[k].top = positions[k - 1].bottom;
          positions[k].bottom = positions[k].bottom - dValue;
        }
      }
    });
    setPositions([...positions]);
  };
  /** 滚动列表 */
  const scrollList = () => {
    const scrollTop = containerRef.current.scrollTop; // 当前滚动位置
    const _start = getStartIndex(positions, scrollTop); // 可视区的start索引
    const _end = _start + getVisibleItemCount(); // 可视区的end索引
    const start = _start - Math.min(_start, bufferCount);
    const end = Math.min(_end + bufferCount, allListData.length);
    const sliceData = allListData.slice(start, end);
    setVisiblListeData(sliceData);
    setStartOffset(start >= 1 ? positions[start - 1].bottom : 0);
    updateItemsSize();
  };

  useEffect(() => {
    setAllListData(mockData);
    setVisiblListeData(mockData.slice(0, getVisibleItemCount()));
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
            <li
              key={item.id}
              data-index={item.index}
              className={styles['container-realList-item']}
            >
              【{item.index}】 {item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VirtualListRandomHieght;
