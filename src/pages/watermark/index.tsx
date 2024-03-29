import { useEffect } from 'react';
import watermark from 'watermark-dom';

const Index = () => {
  // const obj = {
  //   watermark_id: 'wm_div_id', //水印总体的id
  //   watermark_prefix: 'mask_div_id', //小水印的id前缀
  //   watermark_txt: '测试水印', //水印的内容
  //   watermark_x: 20, //水印起始位置x轴坐标
  //   watermark_y: 20, //水印起始位置Y轴坐标
  //   watermark_rows: 0, //水印行数
  //   watermark_cols: 0, //水印列数
  //   watermark_x_space: 100, //水印x轴间隔
  //   watermark_y_space: 50, //水印y轴间隔
  //   watermark_font: '微软雅黑', //水印字体
  //   watermark_color: 'black', //水印字体颜色
  //   watermark_fontsize: '18px', //水印字体大小
  //   watermark_alpha: 0.15, //水印透明度，要求设置在大于等于0.005
  //   watermark_width: 100, //水印宽度
  //   watermark_height: 100, //水印长度
  //   watermark_angle: 15, //水印倾斜度数
  //   watermark_parent_width: 0, //水印的总体宽度（默认值：body的scrollWidth和clientWidth的较大值）
  //   watermark_parent_height: 0, //水印的总体高度（默认值：body的scrollHeight和clientHeight的较大值）
  //   watermark_parent_node: null, //水印插件挂载的父元素element,不输入则默认挂在body上
  // };

  useEffect(() => {
    watermark.init({ watermark_txt: '测试水印测试水印' });
    watermark.load({ watermark_txt: '水印内容' });
    return () => {
      watermark.remove();
    };
  }, []);

  return <div>页面内容</div>;
};

export default Index;
