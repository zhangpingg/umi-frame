import svgEmail from '@/images/email.svg';
import styles from './index.modules.less';

const LocalResources = () => {
  return (
    <div className={styles['lr']}>
      <h5>config.json本地静态资源: {JSON.stringify(window?.$webConfig)}</h5>
      <p>
        本地图片：
        <img src={svgEmail} alt="邮箱" className={styles['lr-img']} />
      </p>
    </div>
  );
};

export default LocalResources;
