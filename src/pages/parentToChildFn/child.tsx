import { forwardRef, useImperativeHandle } from 'react';

const Child = forwardRef((props, ref: any) => {
  const fn2 = () => {
    return '子数据传给父组件';
  };

  /** 暴露给父组件 */
  useImperativeHandle(ref, () => ({
    fn2,
  }));

  return <div>子组件</div>;
});

export default Child;
