import { useEffect, useCallback } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import { getData } from '@/api';

/** 建议：基座layouts组件中使用 */
const Index = () => {
  const fn1 = useCallback(async () => {
    const res = await getData();
    console.log('数据: ', res);
  }, []);

  /** 监听是否有资源请求，长时间没有资源请求则跳转到登录页 */
  useEffect(() => {
    const { reLoginTime } = window.$webConfig;
    // 定时器：超时，跳转至登录页
    window.$timer = reLoginTime
      ? setInterval(() => {
          // 跳转到登录页
          history.push('/home');
        }, reLoginTime)
      : null;
    // 跳转到登录页面
    const callback = (list: PerformanceObserverEntryList) => {
      const { name } = list.getEntries()[0];
      console.log('name', name);
      if (name) {
        window.$timer && clearInterval(window.$timer);
        window.$timer = reLoginTime
          ? setInterval(() => {
              history.push('/home');
            }, reLoginTime)
          : null;
      }
    };
    // 建立一个监听资源的分析器，当有资源的时候，都会重新设定超时定时器
    const listener = new PerformanceObserver(callback);
    listener.observe({ entryTypes: ['resource'] });
    // 清除监听器和定时器
    return () => {
      window.$timer !== null && clearInterval(window.$timer);
      listener.disconnect();
    };
  }, []);

  return (
    <div>
      <Button type="primary" onClick={fn1}>
        请求资源
      </Button>
    </div>
  );
};

export default Index;
