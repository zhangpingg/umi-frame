import { history } from 'umi';
import { Button } from 'antd';
import { useCallback } from 'react';

const Index = () => {
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
    </div>
  );
};
export default Index;
