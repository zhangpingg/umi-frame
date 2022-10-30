import { defineConfig } from 'umi';
const path = require('path');
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '标题',
  publicPath: '/xone/',
  favicon: '/xone/favicon.png',
  base: '/',
  routes: routes,
  fastRefresh: {}, // 快速刷新
  outputPath: 'dist', // build 打包后的目录，默认是 dist
  alias: {
    // 别名配置
    '@': path.resolve('src'),
  },
  qiankun: {
    slave: {},
  },
  headScripts: [`window.publicPath = "/xone/"`],
  dva: {
    hmr: true,
  },
  proxy: {
    // 代理
    '/common-api': {
      target: 'http://10.1.2.345:8000/',
      changeOrigin: true, // 是否把请求头中的 host 值设置成 target 值
      pathRewrite: { '^/common-api': '' },
    },
  },
});
