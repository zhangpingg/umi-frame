import fetch from '@/fetch';

export const getSystemUser = (params: any) =>
  fetch.post(`/common-api/system/user`, params);
