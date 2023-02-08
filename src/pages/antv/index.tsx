import React, { useCallback, useEffect, useRef } from 'react';
import { Pie, Liquid } from '@antv/g2plot';

const Antv = () => {
  const box2Ref = useRef<HTMLDivElement>(null);

  /** 水波图 */
  const initLiquid = () => {
    const liquidPlot = new Liquid('box1', {
      percent: 0.25,
      outline: {
        border: 4,
        distance: 8,
      },
      wave: {
        length: 128,
      },
    });
    liquidPlot.render();
  };

  const data = [
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其他', value: 5 },
  ];
  /** 环形图 */
  const initPiePlot = () => {
    const piePlot = new Pie('box2', {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 1,
      innerRadius: 0.6,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
      },
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          content: 'AntV\nG2Plot',
        },
      },
    });
    piePlot.render();
  };

  useEffect(() => {
    initLiquid();
    initPiePlot();
  }, []);

  return (
    <div>
      <div id="box1"></div>
      <div id="box2" ref={box2Ref}></div>
    </div>
  );
};

export default Antv;
