import React, { useCallback, useEffect } from 'react';
import svgEmail from '@/images/email.svg'
import styles from './index.modules.less';

const LocalResources = () => {

  /** 获取本地静态资源 config.json 文件 */
  const getLocalConfig = useCallback(async () => {
    fetch('/xone/config.json')
      .then((response) => response.json())
      .then((res) => {
        console.log('本地静态资源', res);
      });
  }, []);

  useEffect(() => {
    getLocalConfig();
  }, []);

  return (
    <div className={styles['lr']}>
      <h5>本地静态资源</h5> <br />
      <img src={svgEmail} alt="邮箱" className={styles['lr-img']} />
    </div>
  )
}

export default LocalResources;
