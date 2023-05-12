import { useEffect, useRef } from 'react';

const Test = () => {
  const pRef = useRef<any>();

  useEffect(() => {
    const pNode = pRef.current.getBoundingClientRect(); // 返回元素的大小即相对于视口的位置
    console.log(pNode);
  }, []);

  return (
    <div>
      <p ref={pRef} style={{ margin: '10px 20px 30px 40px' }}>
        内容
      </p>
    </div>
  );
};

export default Test;
