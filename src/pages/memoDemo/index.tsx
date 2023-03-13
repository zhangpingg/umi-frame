import { Button } from 'antd';
import { useState } from 'react';
import Child1 from './child1';
import Child2 from './child2';

const Index = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
      <p>{num1}</p>
      <p>{num2}</p>
      <Button type="primary" onClick={() => setNum1((prev) => ++prev)}>
        按钮
      </Button>
      <Button type="primary" onClick={() => setNum2((prev) => ++prev)}>
        按钮
      </Button>
      <Child1 num={num2} />
      <Child2 num={num2} />
    </div>
  );
};

export default Index;
