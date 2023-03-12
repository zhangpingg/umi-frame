import { useCallback } from 'react';
import { Button } from 'antd';
import { getData } from '@/api';

const UseApi = () => {
  const fn1 = useCallback(async () => {
    const res = await getData();
    console.log('数据: ', res);
  }, []);

  return (
    <div>
      <Button type="primary" onClick={fn1}>
        调接口
      </Button>
    </div>
  );
};

export default UseApi;
