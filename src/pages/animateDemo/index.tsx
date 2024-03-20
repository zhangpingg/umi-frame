import { useRef } from 'react';
import { Button } from 'antd';
import 'animate.css';

const Index = () => {
  const pRef = useRef<any>();

  const startAnimate = () => {
    pRef.current.classList.add('animate__animated', 'animate__bounce');
    setTimeout(() => {
      pRef.current.classList.remove('animate__animated', 'animate__bounce');
    }, 1000);
  };

  return (
    <div>
      <p ref={pRef}>内容</p>
      <Button onClick={startAnimate}>开始动画</Button>
    </div>
  );
};

export default Index;
