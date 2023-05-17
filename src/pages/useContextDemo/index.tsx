import { useState } from 'react';
import { Button } from 'antd';
import { FatherContext } from './context';
import Child from './child';

const Father = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => ++prev);
  };
  const clear = () => {
    setCount(0);
  };

  return (
    <div>
      父组件: {count} <br />
      <Button onClick={add}>点击增加</Button>
      <hr />
      <FatherContext.Provider value={{ count: count, clear: clear }}>
        <Child />
      </FatherContext.Provider>
    </div>
  );
};

export default Father;
