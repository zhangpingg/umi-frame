import React, { useCallback } from 'react';
import { Button } from 'antd';
import { getPublicInfo } from '@/api';

const UseApi = () => {
  const fn1 = useCallback(async () => {
    const res = await getPublicInfo({});
    console.log(res);
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
