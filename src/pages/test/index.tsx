import { useEffect, useRef } from 'react';
// import { Button } from 'antd';
import 'animate.css';
// import styles from './index.module.less';

const Index = () => {
  const divRef = useRef<any>();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.classList.add('animate__animated', 'animate__bounce');
    }, 2000);
  }, []);

  return <div ref={divRef}>11</div>;
};

export default Index;
