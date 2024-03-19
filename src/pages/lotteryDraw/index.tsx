// 示例：https://100px.net/docs/wheel.html
import { useRef, useState } from 'react';
import { LuckyWheel } from '@lucky-canvas/react';
import img1 from '@/images/lotteryDraw/outer-frame.png';
import img2 from '@/images/lotteryDraw/start.png';
import styles from './index.module.less';

const Index = () => {
  const myLucky = useRef<any>();
  // 背景
  const [blocks] = useState([
    {
      padding: '20px',
      imgs: [
        {
          src: img1,
          width: 300,
          height: 300,
          rotate: true, // 背景图片是否跟随旋转
        },
      ],
    },
  ]);
  // 奖品列表
  const [prizes] = useState([
    {
      background: '#e9e8fe',
      fonts: [
        {
          text: '一等奖',
          fontColor: '#f00',
          fontSize: '16px',
          fontWeight: '900',
          lineHeight: '20px',
          top: '10px',
          lineClamp: 1, // 默认 infinity
        },
      ],
      imgs: [{ src: img1, width: '30px', height: '30px', top: '40px' }],
    },
    {
      background: '#b8c5f2',
      fonts: [
        {
          text: '二等奖',
          fontColor: '#f00',
          fontSize: '16px',
          fontWeight: '900',
          top: '10px',
        },
      ],
      imgs: [{ src: img2, width: '30px', height: '30px', top: '40px' }],
    },
    {
      background: '#e9e8fe',
      fonts: [
        {
          text: '三等奖',
          fontColor: '#f00',
          fontSize: '16px',
          fontWeight: '900',
          top: '10px',
        },
      ],
      imgs: [{ src: img1, width: '30px', height: '30px', top: '40px' }],
    },
    {
      background: '#b8c5f2',
      fonts: [
        {
          text: '四等奖',
          fontColor: '#f00',
          fontSize: '16px',
          fontWeight: '900',
          top: '10px',
        },
      ],
      imgs: [{ src: img2, width: '30px', height: '30px', top: '40px' }],
    },
    {
      background: '#e9e8fe',
      fonts: [
        {
          text: '五等奖',
          fontColor: '#f00',
          fontSize: '16px',
          fontWeight: '900',
          top: '10px',
        },
      ],
      imgs: [{ src: img1, width: '30px', height: '30px', top: '40px' }],
    },
    {
      background: '#b8c5f2',
      fonts: [
        {
          text: '六等奖',
          fontColor: '#f00',
          fontSize: '16px',
          fontWeight: '900',
          top: '10px',
        },
      ],
      imgs: [{ src: img2, width: '30px', height: '30px', top: '40px' }],
    },
  ]);
  // 抽奖按钮
  const [buttons] = useState([
    { radius: '40%', background: '#ccc' },
    { radius: '35%', background: '#999' },
    {
      radius: '30%',
      //background: '#869cfa',
      pointer: true,
      // 同奖品列表中的参数格式一致
      //fonts: [{ text: '开始', top: '-10px' }],
      imgs: [{ src: img2, width: '280px', height: '280px', top: '-150px' }],
    },
  ]);

  return (
    <div className={styles.ld}>
      <LuckyWheel
        ref={myLucky}
        width="300px"
        height="300px"
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={() => {
          // 点击抽奖按钮会触发star回调
          if (myLucky?.current) {
            myLucky?.current?.play?.();
          }
          setTimeout(() => {
            const index = (Math.random() * 6) >> 0;
            myLucky?.current?.stop(index);
          }, 1000);
        }}
        onEnd={(prize: any) => {
          // 抽奖结束会触发end回调
          alert('恭喜你抽到 ' + prize.fonts[0].text);
        }}
      />
    </div>
  );
};

export default Index;
