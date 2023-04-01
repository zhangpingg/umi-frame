import { Key, useCallback } from 'react';
import { Form, Input, Select, Table, Button } from 'antd';

const EditFormList = () => {
  const [form] = Form.useForm();

  /** 提交 */
  const submit = () => {
    const formData = form.getFieldsValue(true);
    console.log('formData', formData);
  };
  const getColumns: any = useCallback(
    (
      add: () => void,
      remove: (arg0: any) => void,
      dataSource: string | any[],
    ) => {
      return [
        {
          title: '用户名称',
          dataIndex: 'userName',
          with: 150,
          render(text: any, field: any) {
            return (
              <Form.Item
                rules={[{ required: true, message: '请输入框用户名' }]}
                name={[field.name, 'userName']}
                style={{ marginBottom: 0 }}
              >
                <Input />
              </Form.Item>
            );
          },
        },
        {
          title: '年级',
          dataIndex: 'grade',
          with: 150,
          render(text: any, field: { name: string | number }) {
            return (
              <Form.Item
                rules={[{ required: true, message: '请选择年级' }]}
                name={[field.name, 'grade']}
                style={{ marginBottom: 0, width: '100%' }}
              >
                <Select>
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
            );
          },
        },
        {
          title: '备注',
          dataIndex: 'cleaAmt',
          render() {
            return (
              <Form.Item
                shouldUpdate={true}
                style={{ marginBottom: 0, width: '100%' }}
              >
                <span>前面选择的内容后，联动这里</span>
              </Form.Item>
            );
          },
        },
        {
          title: '操作',
          dataIndex: 'operate',
          className: 'operate',
          width: 120,
          fixed: 'right',
          render(text: any, field: any) {
            return (
              <>
                <Button
                  type="link"
                  onClick={() => remove(field.name)}
                  disabled={field?.isFristRow}
                >
                  删除
                </Button>
                {field?.isLastRow && (
                  <Button type="link" onClick={() => add()}>
                    新增
                  </Button>
                )}
              </>
            );
          },
        },
      ];
    },
    [],
  );

  return (
    <Form
      form={form}
      onFinish={submit}
      initialValues={{
        tableFormList: [{}],
      }}
    >
      <Form.List name="tableFormList">
        {(fields, { add, remove }) => {
          const tableData = fields.map((field, index) => ({
            ...field,
            // prdId: undefined,
            // pflId: undefined,
            // amt: undefined,
            // cleaAmt: undefined,
            // intrAmt: undefined,
            // index: index,
            isFristRow: field.name === 0,
            isLastRow: index === fields?.length - 1,
          }));
          return (
            <Table
              dataSource={tableData}
              columns={getColumns(add, remove, tableData)}
              rowKey="key"
              pagination={false}
              scroll={{ x: 1000, y: 500 }}
            />
          );
        }}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditFormList;
