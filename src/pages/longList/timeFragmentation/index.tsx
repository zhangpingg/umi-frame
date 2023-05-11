import { useEffect, useState } from 'react';
import styles from './index.module.less';

const TimeFragmentation = () => {
  const total = 4000;
  const [list, setList] = useState<string[]>([]);

  const getList = () => {
    const liList = [];
    for (let i = 0; i < total; i++) {
      liList.push(`数据${i}`);
    }
    setList(liList);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <ul className={styles['box']}>
      {list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default TimeFragmentation;
