import { memo } from 'react';

const Index = (props: any) => {
  console.log('子组件1');
  const { num } = props;

  return <div>子组件1: {num}</div>;
};

export default memo(Index);
