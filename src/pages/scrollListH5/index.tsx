import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { dataRes } from './const.js';

const Index = () => {
  const [activeTab, setActiveTab] = useState('week');
  const [list, setList] = useState<any[]>([]);
  const [current, setCurrent] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 模拟接口
  const resDataAPI = () => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve(dataRes);
      }, 1000);
    });
  };
  // 获取-数据
  const getData = async (index: any) => {
    const res: any = await resDataAPI();
    console.log(index, res.pages);
    if (index === 1) {
      setList(res.list);
    } else if (Number(index) < Number(res.pages)) {
      setList([...list, ...res.list]);
    } else if (Number(index) === Number(res.pages)) {
      setList([...list, ...res.list]);
      setHasMore(false);
    }
  };
  // 下一页-滚动加载更多
  const nextLoadMoreFn = () => {
    getData(current + 1);
    setCurrent((prev) => prev + 1);
  };
  // 切换tab
  const changeTab = (type: string) => {
    setHasMore(false);
    const boxDom: any = document.querySelector('.scrollContainer');
    boxDom.scrollTop = 0;
    setActiveTab(type);
    setCurrent(1);
    getData(1);
    Promise.resolve().then(() => {
      setHasMore(true);
    });
  };

  useEffect(() => {
    getData(1);
  }, []);

  return (
    <div>
      <div
        id="scrollContainer"
        className="scrollContainer"
        style={{
          height: '500px',
          overflow: 'auto',
          border: '1px solid #000',
        }}
      >
        <div style={{ height: '200px', border: '1px solid #f00' }}>
          其他盒子内容
        </div>
        【{activeTab}】<br />
        <button onClick={() => changeTab('week')}>选项1</button>
        <button onClick={() => changeTab('month')}>选项2</button>
        <InfiniteScroll
          scrollableTarget="scrollContainer"
          dataLength={list.length}
          hasMore={hasMore}
          next={nextLoadMoreFn}
          loader={<h4>加载中...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>我们也是有底线的</b>
            </p>
          }
        >
          <div>
            {list.map((item: any, index) => (
              <div key={index} style={{ height: '100px' }}>
                {item.productName}
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Index;
