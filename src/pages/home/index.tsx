import { history } from 'umi';
import { Button } from 'antd';
import { useCallback } from 'react';

const Home = () => {
  const jumpPage = useCallback((path) => {
    history.push(`/${path}`);
  }, []);

  return (
    <div className={'global-box'}>
      <Button type="link" onClick={() => jumpPage('test')}>
        test
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('localResources')}>
        本地静态资源
      </Button>{' '}
      <br />
      <Button type="link" onClick={() => jumpPage('useRedux')}>
        @reduxjs/toolkit
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('useDva')}>
        dva
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('useTableReducerDemo')}>
        useTableReducer demo使用
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('useSetIntervalDemo')}>
        useSetInterval demo使用
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('useApi')}>
        调接口
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('cursorPosition')}>
        获取光标、设置光标、插入数据
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('watermark')}>
        水印
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('responsiveGrid')}>
        react-grid-layout 响应布局
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('tableRoll')}>
        table 内容自动滚动
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('antv')}>
        antv 图表
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('antd')}>
        antd
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('skinTheme')}>
        换肤
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('performanceObserverDemo')}>
        PerformanceObserver 监听请求资源
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('frameStoreData')}>
        获取基座的缓存数
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('memoDemo')}>
        memo 例子
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('cryptojs')}>
        crypto-ts 加密解密
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('mouseRightClick')}>
        自定义鼠标右击
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('createPortalDemo')}>
        创建节点在 DOM 组件的层次结构之外, 如modal,message等
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('workerDemo')}>
        Worker 多线程
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('FileReaderDemo')}>
        FileReader异步读取文件 (读取blob对象中的数据)
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('uploadDemo')}>
        Upload 各种上传方式
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('sparkMD5Demo')}>
        spark-md5 计算文件内容的 hash
      </Button>
      <br />
      <Button type="link" onClick={() => jumpPage('longList')}>
        长列表（时间分片 | 虚拟列表）
      </Button>
      <br />
    </div>
  );
};
export default Home;
