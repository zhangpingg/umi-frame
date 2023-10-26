import { useState } from 'react';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import domtoimage from 'dom-to-image';
import styles from './index.module.less';

const Index = () => {
  const [imgUrl, setImgUrl] = useState('');

  // 转换为png
  const transPng = () => {
    const node = document.getElementById('node');
    domtoimage.toPng(node!).then((url) => {
      setImgUrl(url);
    });
  };
  // 下载png
  const downloadPng = () => {
    const link = document.createElement('a');
    link.download = '古诗词.png';
    link.href = imgUrl;
    link.click();
  };

  return (
    <div className={styles.t}>
      <div id="node" className={styles.t_main}>
        <HomeOutlined />
        <p>锄禾日当午</p>
        <p>汗滴禾下土</p>
        <p>谁知盘中餐</p>
        <p>粒粒皆辛苦</p>
        <img
          src="https://img1.baidu.com/it/u=4086652234,221632892&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333"
          className={styles.t_main_img}
        />
      </div>
      <br />
      <img src={imgUrl} className={styles.t_img} />
      <div>
        <Button onClick={transPng}>转换为png</Button>
        <Button onClick={downloadPng}>下载png</Button>
      </div>
    </div>
  );
};

export default Index;
