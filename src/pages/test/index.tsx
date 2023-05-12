import _ from 'lodash';
import { Input } from 'antd';

const Test = () => {
  const debounceFn = _.debounce(() => {
    console.log(11);
  }, 1000);

  return (
    <div>
      防抖：
      <Input onChange={debounceFn} />
    </div>
  );
};

export default Test;
