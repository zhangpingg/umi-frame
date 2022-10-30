const Layouts = '@/layouts';
const Index = '@/pages/index';
const LocalResources = '@/pages/localResources';
const UseRedux = '@/pages/useRedux';
const UseDva = '@/pages/useDva';

export default [
  {
    path: '/',
    component: Layouts,
    routes: [
      { path: '/', redirect: '/index' },
      { path: '/index', component: Index, exact: true },
      {
        path: '/localResources',
        title: '本地资源',
        component: LocalResources,
        exact: true,
      },
      {
        path: '/useRedux',
        title: '@reduxjs/toolkit',
        component: UseRedux,
        exact: true,
      },
      {
        path: '/useDva',
        title: 'UseDva',
        component: UseDva,
        exact: true,
      },
    ],
  },
];
