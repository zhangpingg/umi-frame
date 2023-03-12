import fetch from '@/fetch';
import { get, post } from '@/utils/fetch.js';

const xoneApp1Prefix = '/xone-app1-api/ipo/v1.0';

/** 获取系统参数 */
const getSystemUser = (params: any) =>
  fetch.post(`/common-api/system/user`, params);

// 公共信息维护
const getPublicInfo = (params: any) => {
  return post(`${xoneApp1Prefix}/templateManager/qryInstitutionInfo`, params);
};

const getData = () => {
  return fetch.get('https://unidemo.dcloud.net.cn/api/news');
};
// const getData = (params: any, signal?: any) => {
//   return get(
//     'https://unidemo.dcloud.net.cn/api/news',
//     params,
//     undefined,
//     signal,
//   );
// };
// const controller = new AbortController();
// const res = await getData({ a: 1, b: 2 }, controller?.signal);

export { getSystemUser, getPublicInfo, getData };
