const detailsList = [
  {
    label: '产品名称',
    value: 'aa',
    // colSpan: 12,
    render: (record: any) => {
      return <span style={{ color: '#f00' }}>{record['aa']}</span>;
    },
  },
  {
    label: '投资组合',
    value: 'bb',
  },
  {
    label: '债券代码',
    value: 'cc',
  },
  {
    label: '债券简称',
    value: 'dd',
  },
  {
    label: '市场平台',
    value: 'ff',
  },
  {
    label: '清算速度',
    value: 'gg',
  },
  {
    label: '净价(元)',
    value: 'hh',
  },
  {
    label: '券面总额(万元)',
    value: 'ii',
  },
];

export { detailsList };
