import { Button } from 'antd';
import styles from './index.module.less';

const Test = () => {
  return (
    <div className={styles['test']}>
      <Button type="primary">按钮</Button>
    </div>
  );
};

export default Test;
