import { defineConfig } from 'umi';
import LessPluginFunctions from 'less-plugin-functions';
import path from 'path';
import routes from './config/routes';
import proxy from './config/proxy';
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
        hack: `true; @import (reference) "${path.resolve(
          'src/styles/antdOverride/index.less',
        )}";`,
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
  publicPath: '/xone-app1/',
  favicon: '/xone-app1/favicon.png',
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
  headScripts: [`window.publicPath = "/xone-app1/"`],
  dva: {},
  proxy,
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
