import { Button } from 'antd';
import styles from './index.module.less';

const SkinTheme = () => {
  return (
    <div className={styles['skinTheme']}>
      <p>如果是单独启动子应用，则需要手动给body标签追加类名。如 'theme-gold'</p>
      <Button type="primary">按钮</Button>
    </div>
  );
};

export default SkinTheme;
