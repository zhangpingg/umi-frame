import { useEffect } from 'react';
import SvgaPlayer from './SvgaPlayer';

const svgaUrl1 =
  'https://zc-resource-dev.oss-cn-hangzhou.aliyuncs.com/upload/files/2024/04/30/2921274056947051_01.1714451632152.svga';
const svgaUrl2 =
  'https://zc-resource-dev.oss-cn-hangzhou.aliyuncs.com/upload/files/2024/04/30/2926849024772827_02.1714457206718.svga';

const Index = () => {
  const init = async () => {
    // url：只能是线上地址，不能是本地的svga
    const SvgaPlayerDemo = new SvgaPlayer('#canvas', svgaUrl2);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default Index;
