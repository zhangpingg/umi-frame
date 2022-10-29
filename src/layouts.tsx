import { Provider } from 'react-redux';
import store from './store';
import styles from './index.modules.less';

const Layouts = (props: any) => {
  return (
    <Provider store={store}>
      <div className={styles['layouts']}>
        <div className={styles['layouts-title']}>全局标题-子应用</div>
        {props.children}
      </div>
    </Provider>
  );
};

export default Layouts;
