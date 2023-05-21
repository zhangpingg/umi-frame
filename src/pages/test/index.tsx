import { useEffect, useRef } from 'react';

const Test = () => {
  let timer: any = useRef();

  const startFn = () => {
    console.log('动画ing');
    // 可以理解为setTimeout()
    timer = window.requestAnimationFrame(startFn);
  };
  const stopFn = () => {
    window.cancelAnimationFrame(timer);
  };

  return (
    <div>
      <button onClick={startFn}>开始</button>
      <button onClick={stopFn}>暂停</button>
    </div>
  );
};

export default Test;
