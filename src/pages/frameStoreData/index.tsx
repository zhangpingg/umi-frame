import { Button } from 'antd';

const Index = () => {
  const getFrameStore = () => {
    console.log('store', window.$store);
    console.log('zp-theme', window.$store?.getItem('zp-theme')); // 调用基座的store实例中的getItem方法，来获取缓存数据
    console.log('zp-theme', window.$store?.storeMap['zp-theme']); // 调用基座的store实例，直接获取值（即缓存值）
  };

  return (
    <div>
      祥见控制台 <br />
      <Button type="primary" onClick={getFrameStore}>
        getFrameStore
      </Button>
    </div>
  );
};

export default Index;
