import React, { useEffect } from 'react';
import { Pie } from '@antv/g2plot';

const PiePlot = () => {
  const data = [
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其他', value: 5 },
  ];
  /** 环形图实例 */
  const initPiePlot = () => {
    const piePlot = new Pie('box1', {
      data,
      angleField: 'value', // 扇形切片大小（弧度）所对应的数据字段名
      colorField: 'type', // 扇形颜色映射对应的数据字段名
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
    initPiePlot();
  }, []);

  return <div id="box1" style={{ width: '300px', height: '300px' }}></div>;
};

export default PiePlot;
