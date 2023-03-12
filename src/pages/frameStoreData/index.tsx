import { Button } from 'antd';

const Index = () => {
  const getFrameStore = () => {
    console.log('store', window.$store);
    console.log('xc-theme', window.$store?.getItem('xc-theme')); // 调用基座的store实例中的getItem方法，来获取缓存数据
    console.log('xc-theme', window.$store?.storeMap['xc-theme']); // 调用基座的store实例，直接获取值（即缓存值）
  };

  return (
    <div>
      祥见控制台 <br />
      <Button type="primary" onClick={getFrameStore}>
        获取基座的缓存数据
      </Button>
    </div>
  );
};

export default Index;
