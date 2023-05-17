import { useContext } from 'react';
import { Button } from 'antd';
import { FatherContext } from './context';

const Child = () => {
  const { count, clear } = useContext(FatherContext);

  return (
    <div>
      子组件：{count} <br />
      <Button onClick={clear}>清零</Button>
    </div>
  );
};

export default Child;
