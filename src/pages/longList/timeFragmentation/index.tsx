import { useEffect, useRef } from 'react';
import styles from './index.module.less';

const TimeFragmentation = () => {
  const dataRef = useRef<any>({
    ul: null,
    total: 10000, // 数据总条数
    once: 20, // 每次插入的条数
    index: 0, // 索引
  });

  const getList = (residueLength: number, curIndex: number) => {
    if (residueLength <= 0) {
      return;
    }
    const pageCount: number = Math.min(residueLength, dataRef.current.once); // 每页多少条
    window.requestAnimationFrame(() => {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < pageCount; i++) {
        const li = document.createElement('li');
        li.innerText = `列表项 ${curIndex + i}`;
        fragment.appendChild(li);
      }
      dataRef.current?.ul.appendChild(fragment);
      getList(residueLength - pageCount, curIndex + pageCount);
    });
  };

  useEffect(() => {
    const { total, index } = dataRef.current;
    dataRef.current.ul = document.getElementById('container');
    getList(total, index);
  }, []);

  return <ul id="container" className={styles['box']}></ul>;
};

export default TimeFragmentation;
