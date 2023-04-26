import { useEffect, useRef } from 'react';

const WorkerDemo = () => {
  const workerRef = useRef<Worker>(); //（worker => workerRef.current）

  useEffect(() => {
    // 主线程
    const worker = new Worker('./worker.js');
    worker.postMessage('数据: 主线程=>worker线程');
    worker.onmessage = (e) => {
      console.log(e.data); // 数据: worker线程=>主线程
    };
    // 监听onerror属性来监听worker抛出的异常。
    worker.onerror = (event) => {
      console.log(event.message); //  worker线程出错了
    };
    // 关闭worker
    // worker.terminate()
  }, []);

  return <div>Worker 多线程</div>;
};

export default WorkerDemo;
