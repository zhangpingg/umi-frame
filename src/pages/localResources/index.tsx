import React, { useCallback, useEffect } from 'react';
import svgEmail from '@/images/email.svg';
import styles from './index.modules.less';

const LocalResources = () => {
  useEffect(() => {
    console.log('本地静态资源', window?.$webConfig);
  }, []);

  return (
    <div className={styles['lr']}>
      <h5>本地静态资源</h5> <br />
      <img src={svgEmail} alt="邮箱" className={styles['lr-img']} />
    </div>
  );
};

export default LocalResources;
