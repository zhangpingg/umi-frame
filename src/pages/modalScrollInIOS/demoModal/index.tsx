import { useEffect, useRef } from 'react';
import styles from './index.module.less';

const Index = () => {
  return (
    <div className={styles['dm']}>
      <span className={styles['dm-layer']}></span>
      <div className={styles['dm-main']}>
        <div className={styles['dm-main-title']}>标题</div>
        <ul className={styles['dm-main-list']}>
          <li>11</li>
          <li>22</li>
          <li>33</li>
          <li>44</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
