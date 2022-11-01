import fetch from '@/fetch';
import { post } from '@/utils/fetch.js';

const ipoPrefix = '/xone-api/ipo/v1.0';

/** 获取系统参数 */
const getSystemUser = (params: any) =>
  fetch.post(`/common-api/system/user`, params);

// 公共信息维护
const getPublicInfo = (params: any) =>
  post(`${ipoPrefix}/templateManager/qryInstitutionInfo`, params).then(
    (res: any) => res,
  );

export { getSystemUser, getPublicInfo };
