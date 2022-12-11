// 1) 简单布局
//   详见 github：umi-frame 项目
// 2) 响应布局
// 掘金：https://juejin.cn/post/6844904035523231752
// 简书：https://www.jianshu.com/p/001df1e5772e（建议）
// code例子：https://codesandbox.io/s/5wy3rz5z1x?module=/src/ShowcaseLayout.js&file=/src/ShowcaseLayout.js

import React, { useMemo } from 'react';
import GridLayout from 'react-grid-layout';
import './grid-base.less';
import style from './index.modules.less';

const ResponsiveGrid = () => {
  /** 布局：第一种布局方式 */
  const layout = useMemo(() => {
    return [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, isDraggable: false },
      { i: 'c', x: 4, y: 0, w: 1, h: 2, isResizable: false },
    ];
  }, []);
  /** 拖拽盒子位置结束后事件 */
  const onDragStop = (list: any[], itemStart: any, itemEnd: any) => {
    console.log(11, list);
    console.log(22, itemStart);
    console.log(33, itemEnd);
  };
  /** 拖拽盒子大小结束后事件 */
  const onResizeStop = (list: any[], itemStart: any, itemEnd: any) => {
    console.log(11, list);
    console.log(22, itemStart);
    console.log(33, itemEnd);
  };

  return (
    <div className={`${style['responsive-grid-container']}`}>
      <GridLayout
        className={`${style['responsive-grid-container-main']}`}
        // layout={layout}
        rowHeight={88}
        cols={12}
        width={1200}
        compactType={null} // 紧凑类型 水平或者垂直或者空
        onDragStop={onDragStop}
        onResizeStop={onResizeStop}
      >
        <div
          key="a"
          data-grid={{ i: 'a', x: 0, y: 0, w: 1, h: 2, static: true }}
        >
          <div className={`${style['rgcm-item-content']}`}>静态卡片</div>
        </div>
        <div
          key="b"
          data-grid={{
            i: 'b',
            x: 1,
            y: 0,
            w: 3,
            h: 2,
            minW: 2,
            maxW: 4,
            isDraggable: false,
          }}
        >
          <div className={`${style['rgcm-item-content']}`}>动态卡片1</div>
        </div>
        <div key="c">
          <div className={`${style['rgcm-item-content']}`}>动态卡片2</div>
        </div>
      </GridLayout>
    </div>
  );
};

export default ResponsiveGrid;
