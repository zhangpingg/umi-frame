import { Input } from 'antd';
import { useActivate, useUnactivate } from 'react-activation';

const Child1 = () => {
  /** 只有在KeepAlive下才有效 */
  useActivate(() => {
    console.log('子组件激活了'); //第一次打开的时候不会执行
  });
  useUnactivate(() => {
    console.log('子组件关闭了');
  });

  return (
    <div>
      子组件1: <Input />
    </div>
  );
};

export default Child1;
