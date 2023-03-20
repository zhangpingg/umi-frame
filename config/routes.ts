export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: '@/pages/home', exact: true },
      { path: '/test', component: '@/pages/test', exact: true },
      {
        path: '/localResources',
        title: '本地资源',
        component: '@/pages/localResources',
        exact: true,
      },
      {
        path: '/useRedux',
        component: '@/pages/useRedux',
        exact: true,
      },
      {
        path: '/useDva',
        component: '@/pages/useDva',
        exact: true,
      },
      {
        path: '/useSetIntervalDemo',
        component: '@/pages/useSetIntervalDemo',
        exact: true,
      },
      {
        path: '/useTableReducerDemo',
        component: '@/pages/useTableReducerDemo',
        exact: true,
      },
      {
        path: '/useApi',
        component: '@/pages/useApi',
        exact: true,
      },
      {
        path: '/cursorPosition',
        component: '@/pages/cursorPosition',
        exact: true,
      },
      {
        path: '/watermark',
        component: '@/pages/watermark',
        exact: true,
      },
      {
        path: '/responsiveGrid',
        component: '@/pages/responsiveGrid',
        exact: true,
      },
      {
        path: '/tableRoll',
        component: '@/pages/tableRoll',
        exact: true,
      },
      {
        path: '/antv',
        component: '@/pages/antv',
        exact: true,
      },
      {
        path: '/antd',
        component: '@/pages/antd',
        exact: true,
      },
      {
        path: '/skinTheme',
        component: '@/pages/skinTheme',
        exact: true,
      },
      {
        path: '/performanceObserverDemo',
        component: '@/pages/performanceObserverDemo',
        exact: true,
      },
      {
        path: '/frameStoreData',
        component: '@/pages/frameStoreData',
        exact: true,
      },
      {
        path: '/memoDemo',
        component: '@/pages/memoDemo',
        exact: true,
      },
      {
        path: '/cryptoJs',
        component: '@/pages/cryptoJs',
        exact: true,
      },
      {
        path: '/mouseRightClick',
        component: '@/pages/mouseRightClick',
        exact: true,
      },
    ],
  },
];
