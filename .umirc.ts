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
});
