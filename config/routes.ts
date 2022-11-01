const Layouts = '@/layouts';
const Index = '@/pages/index';
const Test = '@/pages/test';
const LocalResources = '@/pages/localResources';
const UseRedux = '@/pages/useRedux';
const UseDva = '@/pages/useDva';
const UseTableReducerDemo = '@/pages/useTableReducerDemo';
const UseApi = '@/pages/useApi';

export default [
  {
    path: '/',
    component: Layouts,
    routes: [
      { path: '/', redirect: '/index' },
      { path: '/index', component: Index, exact: true },
      { path: '/test', component: Test, exact: true },
      {
        path: '/localResources',
        title: '本地资源',
        component: LocalResources,
        exact: true,
      },
      {
        path: '/useRedux',
        component: UseRedux,
        exact: true,
      },
      {
        path: '/useDva',
        component: UseDva,
        exact: true,
      },
      {
        path: '/useTableReducerDemo',
        component: UseTableReducerDemo,
        exact: true,
      },
      {
        path: '/useApi',
        component: UseApi,
        exact: true,
      },
    ],
  },
];
