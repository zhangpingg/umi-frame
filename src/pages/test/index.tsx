import { useEffect, useRef } from 'react';
// import { Button } from 'antd';
import 'animate.css';
// import styles from './index.module.less';

const Index = () => {
  const divRef = useRef<any>();

  const fn1 = () => {
    divRef.current.classList.add('animate__animated', 'animate__bounce');
  };

  return (
    <div ref={divRef} onClick={fn1}>
      11
    </div>
  );
};

export default Index;
