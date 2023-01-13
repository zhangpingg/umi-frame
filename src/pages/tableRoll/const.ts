const getData = (num: number) => {
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push({
      key: i,
      name: `张三${i}`,
      age: i,
      address: '杭州',
    });
  }
  return res;
};

export const dataList = getData(5);
