import fetch from '@/fetch';
import { get, post } from '@/utils/fetch.js';

const ipoPrefix = '/xone-api/ipo/v1.0';

/** 获取系统参数 */
const getSystemUser = (params: any) =>
  fetch.post(`/common-api/system/user`, params);

// 公共信息维护
const getPublicInfo = (params: any) => {
  return post(`${ipoPrefix}/templateManager/qryInstitutionInfo`, params);
};

const getData = (params: any, signal: any) => {
  return get(
    'https://unidemo.dcloud.net.cn/api/news',
    params,
    undefined,
    signal,
  );
};

export { getSystemUser, getPublicInfo, getData };
