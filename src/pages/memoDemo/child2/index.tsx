import { memo } from 'react';

const Index = (props: any) => {
  console.log('子组件2');
  const { num } = props;

  return <div>子组件2: {num}</div>;
};

// 类似 shouldComponentUpdate(): 手动判断是否需要重新渲染
function areEqual(prevProps: any, nextProps: any) {
  if (nextProps.num >= 3) {
    return true; // 不渲染子组件
  }
  return false;
}

export default memo(Index, areEqual);
