import { useCallback, useEffect, useState } from 'react';
import { Form, Input, InputNumber, Table, Button } from 'antd';

interface DataItemProps {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: DataItemProps;
  index: number;
  children: React.ReactNode;
}
/** table行的每个单元格 */
const EditableCell: React.FC<EditableCellProps> = ({
  inputType,
  title,
  dataIndex,
  editing,
  record,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `请输入 ${title}`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditRow: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<DataItemProps[]>([]);
  const [editingKey, setEditingKey] = useState(''); //当前编辑行的key

  /** 判断某行是否处于编辑中 */
  const isEditing = (record: DataItemProps) => record.key === editingKey;
  /** 编辑 */
  const edit = (record: Partial<DataItemProps> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', ...record });
    setEditingKey(record.key);
  };
  /** 取消 */
  const cancel = () => {
    setEditingKey('');
  };
  /** 保存 */
  const save = async (key: React.Key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      setData(newData);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  /** 列表头（初始化） */
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: '地址',
      dataIndex: 'address',
      width: '40%',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_: any, record: DataItemProps) => {
        const editable = isEditing(record);
        return editable ? (
          <>
            <Button onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              保存
            </Button>
            <Button onClick={cancel}>取消</Button>
          </>
        ) : (
          <Button onClick={() => edit(record)}>编辑</Button>
        );
      },
    },
  ];
  /** 转换列表头 */
  const mergedColumns = columns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataItemProps) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  /** 初始化数据 */
  const initData = useCallback(() => {
    const originData: DataItemProps[] = [];
    for (let i = 0; i < 5; i++) {
      originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 10 + i,
        address: `London Park no. ${i}`,
      });
    }
    setData(originData);
  }, []);

  useEffect(() => {
    initData();
  }, []);

  return (
    <div>
      <h2>编辑行</h2>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </div>
  );
};

export default EditRow;
