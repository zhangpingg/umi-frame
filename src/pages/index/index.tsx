import { history } from 'umi';
import { Button } from 'antd';

const Index = () => {
  return (
    <div className={'global-box'}>
      <Button type="link" onClick={() => history.push('/localResources')}>
        本地静态资源
      </Button>{' '}
      <br />
      <Button type="link" onClick={() => history.push('/useRedux')}>
        @reduxjs/toolkit
      </Button>
    </div>
  );
};
export default Index;
