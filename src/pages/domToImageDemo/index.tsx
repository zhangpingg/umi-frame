// https://blog.csdn.net/lucky569/article/details/113739411
// png、jpeg、svg

import { useState } from 'react';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import domtoimage from 'dom-to-image';
import styles from './index.module.less';

const Index = () => {
  const [pngUrl, setPngUrl] = useState('');
  const [jpegUrl, setJpegUrl] = useState('');

  // 转换为png
  const transPng = () => {
    const node = document.getElementById('node');
    domtoimage.toPng(node!).then((url) => {
      setPngUrl(url);
    });
  };
  // 转换为jpeg
  const transJpeg = () => {
    const node = document.getElementById('node');
    domtoimage.toJpeg(node!, { quality: 0.95 }).then((url) => {
      setJpegUrl(url);
    });
  };
  // 下载png
  const downloadPng = (type: string) => {
    const link = document.createElement('a');
    link.download = type == 'png' ? '古诗词1.png' : '古诗词2.jpeg';
    link.href = type == 'png' ? pngUrl : jpegUrl;
    link.click();
  };

  return (
    <div className={styles.dti}>
      <div id="node" className={styles.dti_main}>
        <HomeOutlined />
        <p>锄禾日当午</p>
        <p>汗滴禾下土</p>
        <p>谁知盘中餐</p>
        <p>粒粒皆辛苦</p>
        <img
          src="https://img1.baidu.com/it/u=4086652234,221632892&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333"
          className={styles.dti_main_img}
        />
      </div>
      <br />
      <img src={pngUrl} title="png" />
      <img src={jpegUrl} title="jpeg" />
      <div>
        <Button onClick={transPng}>转换为png</Button>
        <Button onClick={() => downloadPng('png')}>下载png</Button> <br />
        <Button onClick={transJpeg}>转换为jpeg</Button>
        <Button onClick={() => downloadPng('jepg')}>下载jpeg</Button> <br />
      </div>
    </div>
  );
};

export default Index;
