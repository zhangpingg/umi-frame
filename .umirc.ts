import { defineConfig } from 'umi';
import LessPluginFunctions from 'less-plugin-functions';
import path from 'path';
import routes from './config/routes';
import WebpackChain from 'webpack-chain';

// 重新配置less-loader，使其能够换肤
const LessLoaderConfig = (config: WebpackChain) => {
  const rule = config.module.rule('less');
  const cssModule = rule.oneOf('css-modules');
  const css = rule.oneOf('css');
  // 删除less-loader
  cssModule.uses.delete(require.resolve('@umijs/deps/compiled/less-loader'));
  css.uses.delete(require.resolve('@umijs/deps/compiled/less-loader'));

  // 重新添加 less-loader
  const options = {
    lessOptions: {
      modifyVars: {
        'ant-prefix': 'zp-ant',
        'font-size-base': '12px',
      },
      javascriptEnabled: true,
      plugins: [new LessPluginFunctions({ alwaysOverride: true })],
      math: 'always',
    },
  };
  // 增加thread-loader ，加快编译速度
  cssModule
    .use('less-loader')
    .loader('less-loader')
    .options({ ...options });

  css
    .use('less-loader')
    .loader('less-loader')
    .options({ ...options });
};

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
  dva: {},
  proxy: {
    // 代理
    '/common-api': {
      target: 'http://10.1.2.345:8000/',
      changeOrigin: true, // 是否把请求头中的 host 值设置成 target 值
      pathRewrite: { '^/common-api': '' },
    },
  },
  extraBabelPlugins: [
    // 按需引入
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es', // default: lib
        style: true,
      },
    ],
  ],
  chainWebpack: function (config) {
    config.module
      .rule('js')
      .use('thread-loader')
      .loader('thread-loader')
      .before('babel-loader');

    LessLoaderConfig(config);
  },
});
