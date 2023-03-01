import { useEffect } from 'react';
import { Liquid } from '@antv/g2plot';

const Index = () => {
  /** 水波纹 */
  const initLiquid = () => {
    const liquidExample = new Liquid('box1', {
      percent: 0.6, // 百分比
      outline: {
        // 轮廓
        border: 4, // 环宽
        distance: 10, // 外环距离内区域的间距
      },
      wave: {
        // 波动
        length: 128,
      },
    });
    liquidExample.render();
  };

  useEffect(() => {
    initLiquid();
  }, []);

  return (
    <div
      id="box1"
      style={{
        width: '300px',
        height: '300px',
        border: '1px solid #ccc',
        background: '#f1f1f1',
      }}
    ></div>
  );
};

export default Index;
