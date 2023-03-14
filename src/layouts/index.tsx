import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import store from '@/store';
import '@/styles/common.less';
import styles from './index.module.less';

// 对 message，modal，Notification 组件的前缀需要单独配置
ConfigProvider.config({
  prefixCls: 'zp-ant',
});

const Layouts = (props: any) => {
  return (
    <Provider store={store}>
      <ConfigProvider componentSize="small" locale={zhCN} prefixCls="zp-ant">
        <div className={styles['layouts']}>
          <div className={styles['layouts-title']}>全局标题-子应用</div>
          {props.children}
        </div>
      </ConfigProvider>
    </Provider>
  );
};

export default Layouts;
