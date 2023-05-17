import { useRef } from 'react';
import Child from './child';

const Father = () => {
  const childRef = useRef<{ fn2: Function }>(null);

  const fn1 = () => {
    if (childRef?.current) {
      const data = childRef?.current?.fn2(); // 子数据传给父组件
      console.log(data);
    }
  };

  return (
    <div>
      <button onClick={fn1}>调用子组件方法</button>
      <Child ref={childRef} />
    </div>
  );
};

export default Father;
