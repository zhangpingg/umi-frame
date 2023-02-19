import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { Table, Form, InputNumber, Button } from 'antd';
import { useMemoizedFn } from 'ahooks';

const EditableContext: any = React.createContext(null);

/** table行—用form包一下 */
const EditableRow = ({ ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      {/* form实例传递给单元格，方便数据回显设置值 */}
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
/** table行的每个单元格 */
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}: any) => {
  const [editing, setEditing] = useState(false);
  const inputRef: any = useRef(null);
  const form: any = useContext(EditableContext);

  /** 监听是否是编辑状态 */
  useEffect(() => {
    if (editing) {
      inputRef?.current?.focus();
    }
  }, [editing]);
  /** 切换编辑状态 */
  const toggleEdit = () => {
    setEditing(true);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  /** 保存 */
  const save = async () => {
    try {
      const values = await form?.validateFields();
      // toggleEdit();
      setEditing(false);
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;
  // 是可编辑单元格
  if (editable) {
    childNode = editing ? (
      <Form.Item style={{ margin: 0 }} name={dataIndex}>
        <InputNumber
          min={0}
          max={10000}
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
        />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" onClick={toggleEdit}>
        {children[1] ? children : 0} %
      </div>
    );
  }
  return <td {...restProps}> {childNode} </td>;
};

const EditCell = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      name: 1,
      age: 32,
      address: '上海',
    },
    {
      key: '1',
      name: 2,
      age: '32',
      address: '深圳',
    },
  ]);
  const [columns, setColumns] = useState<any[]>();
  const [count, setCount] = useState(2);

  /** 重写table元素 */
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  /** 列表头（初始化） */
  const initColumns = useMemo(
    () => [
      {
        title: '百分比',
        dataIndex: 'name',
        editable: true,
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '地址',
        dataIndex: 'address',
      },
    ],
    [],
  );
  /** 编辑后保存 */
  const handleSave = useMemoizedFn((row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  });
  /** 转换columns */
  const transformColumns = useCallback(() => {
    const columnX = initColumns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        // 给单元格塞数据
        onCell: (record: any) => {
          return {
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: handleSave,
          };
        },
      };
    });
    setColumns(columnX);
  }, [initColumns, handleSave]);
  /** 添加 */
  const addData = () => {
    const newData = {
      key: `key_${count}`,
      name: 11,
      age: '32',
      address: `杭州 ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  useEffect(() => {
    transformColumns();
  }, [transformColumns]);

  return (
    <div>
      <Button onClick={addData}>添加</Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default EditCell;
