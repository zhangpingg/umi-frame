import { createPortal } from 'react-dom';
import styles from './index.module.less';

const CoverLayer = () => {
  return createPortal(<div className={styles['box']}></div>, document.body);
};

export default CoverLayer;
