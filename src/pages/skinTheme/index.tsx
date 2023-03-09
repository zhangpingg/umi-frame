import { Button } from 'antd';
import styles from './index.module.less';

const SkinTheme = () => {
  return (
    <div className={styles['skinTheme']}>
      <Button type='primary'>按钮</Button>
    </div>
  );
};

export default SkinTheme;
