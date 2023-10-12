const sharedOnCell = (_, index) => {
  // 合并单元格后面的单元格要设置colSpan为0
  if (index < 2) {
    return { colSpan: 0 };
  }
  return {};
};

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    onCell: (_, index) => ({
      colSpan: index < 2 ? 3 : 1, // 第2行之前合并3个三个单元格，其他默认为1
    }),
  },
  {
    title: '电话+手机号',
    dataIndex: 'tel',
    colSpan: 2,
    onCell: sharedOnCell,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    colSpan: 0,
    onCell: sharedOnCell,
  },
  {
    title: '地址',
    dataIndex: 'address',
    onCell: (_, index) => {
      if (index === 0) {
        return { rowSpan: 4 }; // 占4个单元格
      } else if (index > 0 && index < 4) {
        return { rowSpan: 0 }; // 后面设置为0
      } else {
        return {};
      }
    },
  },
];

const resList = [
  {
    key: '1',
    name: '张三',
    age: 11,
    tel: '0571-1111111',
    phone: 18889891111,
    address: '杭州',
  },
  {
    key: '2',
    name: '李四',
    age: 22,
    tel: '0571-2222222',
    phone: 18889892222,
    address: '上海',
  },
  {
    key: '3',
    name: '王五',
    age: 33,
    tel: '0575-3333333',
    phone: 18900013333,
    address: '北京',
  },
  {
    key: '4',
    name: '赵六',
    age: 44,
    tel: '0575-4444444',
    phone: 18900014444,
    address: '青岛',
  },
  {
    key: '5',
    name: '钱七',
    age: 55,
    tel: '0575-5555555',
    phone: 18900015555,
    address: '西安',
  },
];

export { columns, resList };
