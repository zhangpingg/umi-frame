import { useEffect, useMemo } from 'react';
import GridLayout from 'react-grid-layout';
import './grid-base.less';
import style from './index.modules.less';

const ResponsiveGrid = () => {
  /** 布局 */
  const layout = useMemo(() => {
    return [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ];
  }, []);

  useEffect(() => {
    const a = 1;
    console.log(b);

    const c: string = 2;
    console.log(d);
  }, []);

  return (
    <div className={`${style['responsive-grid-container']}`}>
      <GridLayout
        className={`${style['responsive-grid-container-main']}`}
        layout={layout}
        rowHeight={88}
        cols={12}
        width={1200}
        compactType={null} // 紧凑类型 水平或者垂直或者空
      >
        <div className={`${style['rgcm-item']}`} key="a">
          <div className={`${style['rgcm-item-content']}`}>静态卡片</div>
        </div>
        <div className={`${style['rgcm-item']}`} key="b">
          <div className={`${style['rgcm-item-content']}`}>动态卡片1</div>
        </div>
        <div className={`${style['rgcm-item']}`} key="c">
          <div className={`${style['rgcm-item-content']}`}>动态卡片2</div>
        </div>
      </GridLayout>
    </div>
  );
};

export default ResponsiveGrid;
