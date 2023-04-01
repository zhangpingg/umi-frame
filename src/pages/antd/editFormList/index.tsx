import { Form, Input, Select, Space, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const EditFormList = () => {
  const [form] = Form.useForm();

  /** 提交 */
  const submit = () => {
    const formData = form.getFieldsValue(true);
    console.log(formData);
  };

  return (
    <Form form={form}>
      <Form.Item name="userName" label="用户名称">
        <Input />
      </Form.Item>
      <Form.List name="infoList">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area ||
                    prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <Form.Item
                      {...field}
                      label="年龄"
                      name={[field.name, 'age']}
                      rules={[{ required: true, message: '请输入年龄' }]}
                    >
                      <Input />
                    </Form.Item>
                  )}
                </Form.Item>
                <Form.Item
                  {...field}
                  label="年级"
                  name={[field.name, 'grade']}
                  rules={[{ required: true, message: '请选择年级' }]}
                >
                  <Select style={{ width: 130 }}>
                    <Select.Option key={1} value={1}>
                      一年级
                    </Select.Option>
                    <Select.Option key={2} value={2}>
                      二年级
                    </Select.Option>
                    <Select.Option key={3} value={3}>
                      三年级
                    </Select.Option>
                  </Select>
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
                <PlusOutlined onClick={add} />
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                增加
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" onClick={submit}>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditFormList;
