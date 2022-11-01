//  各服务器地址
const COMMON_URL = 'http://10.1.2.345:8000';
const XONE_API = 'http://10.1.2.345:8000';

export default {
  '/common-api': {
    target: COMMON_URL,
    changeOrigin: true, // 是否把请求头中的 host 值设置成 target 值
    pathRewrite: { '^/common-api': '/' },
  },
  '/xone-api': {
    target: XONE_API,
    changeOrigin: true,
  },
};
