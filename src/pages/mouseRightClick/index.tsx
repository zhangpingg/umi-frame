import { useEffect, useState } from 'react';

const MouseRightClick = () => {
  const [content, setContent] = useState();

  /** 右击的回调函数 — dataset用来获取js标签以data开头的属性 */
  const rightClickCallback = (e: any, item: any) => {
    e.preventDefault();
    setContent(item.dataset);
  };

  useEffect(() => {
    const liEles = document.querySelectorAll('ul>li');
    liEles.forEach((item) => {
      // 方式1
      item.addEventListener('contextmenu', (e) => rightClickCallback(e, item));
      // 方式2
      // item.addEventListener('contextmenu', (e: any) => {
      //   if (e.button === 2) {
      //     rightClickCallback(e, item);
      //   }
      // });
    });

    return () => {
      liEles.forEach((item) => {
        item.removeEventListener('contextmenu', (e) =>
          rightClickCallback(e, item),
        );
      });
    };
  }, []);

  return (
    <div>
      <ul>
        <li data-value={1} data-type={'11'}>
          张三
        </li>
        <li data-value={2} data-type={'22'}>
          李四
        </li>
        <li data-value={3} data-type={'33'}>
          王五
        </li>
      </ul>
      <p>{JSON.stringify(content)}</p>
    </div>
  );
};

export default MouseRightClick;
