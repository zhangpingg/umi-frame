import { useEffect } from 'react';
import { Downloader, Parser, Player } from 'svga.lite';

const Index = () => {
  const init = async () => {
    const downloader = new Downloader();
    // 默认调用 WebWorker 线程解析
    // 可配置 new Parser({ disableWorker: true }) 禁止
    const parser = new Parser();
    // #canvas 是 HTMLCanvasElement
    const player = new Player('#canvas');

    const fileData = await downloader.get('@/images/02.svga');
    const svgaData = await parser.do(fileData);

    player.set({
      loop: 1,
      cacheFrames: false,
      intersectionObserverRender: false,
    });

    await player.mount(svgaData);

    //player
    //  // 开始动画事件回调
    //  .$on('start', () => console.log('event start'))
    //  // 暂停动画事件回调
    //  .$on('pause', () => console.log('event pause'))
    //  // 继续播放动画事件回调
    //  .$on('resume', () => console.log('event resume'))
    //  // 停止动画事件回调
    //  .$on('stop', () => console.log('event stop'))
    //  // 动画结束事件回调
    //  .$on('end', () => console.log('event end'))
    //  // 清空动画事件回调
    //  .$on('clear', () => console.log('event clear'))
    //  // 动画播放中事件回调
    //  .$on('process', () => console.log('event process', player.progress));

    // 开始播放动画
    player.start();
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
