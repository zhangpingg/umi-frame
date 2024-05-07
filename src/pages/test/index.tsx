import React, { useState } from 'react';
import cn from 'classnames';
import styles from './index.module.less';

const Index = () => {
  const [isMove, setIsMove] = useState(false);

  const fn1 = () => {
    setIsMove(true);
    setTimeout(() => {
      setIsMove(false);
    }, 1000);
  };

  return (
    <React.Fragment>
      <div
        className={cn({
          [`${styles['box-slider']}`]: true,
          [`${styles['box-sliderMove']}`]: isMove,
        })}
      ></div>
      <button className={styles['btn']} onClick={fn1}>
        动画
      </button>
    </React.Fragment>
  );
};

export default Index;
