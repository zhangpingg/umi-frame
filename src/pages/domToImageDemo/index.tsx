// https://blog.csdn.net/lucky569/article/details/113739411
// png、jpeg、svg

import { useState, useRef, useEffect } from 'react';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas';
import localPic from '@/images/01.jpg';
import styles from './index.module.less';

const onlinePic =
  'https://img1.baidu.com/it/u=4086652234,221632892&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333';

const Index = () => {
  const boxRef = useRef(null);
  const [onlineUrl, setOnLineUrl] = useState<any>();
  const [imgUrl, setImgUrl] = useState('');

  // 转换dom为图片（dom -> canvas -> 图片）
  const transDomToCanvas = () => {
    html2canvas(boxRef.current!, { useCORS: true }).then(function (canvas) {
      const url = canvas.toDataURL();
      setImgUrl(url);
    });
  };
  // 下载图片
  const downloadPic = () => {
    const link = document.createElement('a');
    link.download = '古诗词.png';
    link.href = imgUrl;
    link.click();
  };
  // 线上图片转换为base64图片
  const transImageToBase64Image = (src: string) => {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('get', src, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status === 200) {
          const blob = this.response;
          const oFileReader = new FileReader();
          oFileReader.onloadend = function (e) {
            const base64 = e?.target?.result;
            resolve(base64);
          };
          oFileReader.readAsDataURL(blob);
        }
      };
      xhr.send();
    });
  };

  useEffect(() => {
    // 线上图片需要转换为base64，否则转换为canvas，再转图片的时候显示不出来
    transImageToBase64Image(onlinePic).then((url) => {
      setOnLineUrl(url);
    });
  }, []);

  return (
    <div className={styles.dti}>
      <div className={styles.dti_main} ref={boxRef}>
        <HomeOutlined />
        <p>锄禾日当午</p>
        <p>汗滴禾下土</p>
        <p>谁知盘中餐</p>
        <p>粒粒皆辛苦</p>
        <img src={onlineUrl} crossOrigin="anonymous" />
        <img src={localPic} crossOrigin="anonymous" alt="" />
      </div>
      <br />
      <img src={imgUrl} />
      <div>
        <Button onClick={transDomToCanvas}>dom转换为图片</Button>
        <Button onClick={downloadPic}>下载</Button>
      </div>
    </div>
  );
};

export default Index;
