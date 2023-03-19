import { useState } from 'react';
import { aesEncrypt, aesDecrypt } from '@/utils/crypt';
import { Form, Input, Button } from 'antd';

const CryptoJs = () => {
  const [form] = Form.useForm();
  const [passwordVal, setPasswordVal] = useState<string>('');

  /** 加密 */
  const encryption = () => {
    const val = form.getFieldValue('password');
    const encryptVal = aesEncrypt(val);
    setPasswordVal(encryptVal);
  };
  /** 解密 */
  const deciphering = () => {
    const decipheringVal = aesDecrypt(passwordVal);
    setPasswordVal(decipheringVal);
  };

  return (
    <Form form={form}>
      <Form.Item name="password">
        <Input style={{ width: '200px' }} />
      </Form.Item>
      <p>密码：{passwordVal || '--'}</p>
      <Button onClick={encryption}>加密</Button>
      <Button type="primary" onClick={deciphering}>
        解密
      </Button>
    </Form>
  );
};

export default CryptoJs;
