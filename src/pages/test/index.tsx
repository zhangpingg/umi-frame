import React, { useEffect } from 'react';
import { Button, Modal, message } from 'antd';

const Test = () => {
  useEffect(() => {
    message.info('This is a normal message');
  }, []);

  return (
    <div>
      <Button type="primary">1</Button>
      <Modal title="Basic Modal" visible={false}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Test;
