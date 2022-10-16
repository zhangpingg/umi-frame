import styles from './index.modules.less';

const Layouts = (props: any) => {
  return (
    <div className={styles['layouts']}>
      <div className={styles['layouts-title']}>全局标题</div>
      {props.children}
    </div>
  )
}

export default Layouts;
