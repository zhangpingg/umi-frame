import { request } from 'umi';

export default {
  post: (url: string, params: any) => {
    return request(url, {
      method: 'post',
      data: params,
    });
  },
  get: (url: string) => {
    return request(url, {
      method: 'get',
    });
  },
};
