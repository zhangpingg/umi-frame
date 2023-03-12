const Layouts = '@/layouts';
const Home = '@/pages/home';
const Test = '@/pages/test';
const LocalResources = '@/pages/localResources';
const UseRedux = '@/pages/useRedux';
const UseDva = '@/pages/useDva';
const UseTableReducerDemo = '@/pages/useTableReducerDemo';
const UseSetIntervalDemo = '@/pages/useSetIntervalDemo';
const UseApi = '@/pages/useApi';
const CursorPosition = '@/pages/cursorPosition';
const Watermark = '@/pages/watermark';
const ResponsiveGrid = '@/pages/responsiveGrid';
const TableRoll = '@/pages/tableRoll';
const Antv = '@/pages/antv';
const Antd = '@/pages/antd';
const SkinTheme = '@/pages/skinTheme';
const PerformanceObserverDemo = '@/pages/performanceObserverDemo';
const FrameStoreData = '@/pages/frameStoreData';

export default [
  {
    path: '/',
    component: Layouts,
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: Home, exact: true },
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
        path: '/useSetIntervalDemo',
        component: UseSetIntervalDemo,
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
      {
        path: '/cursorPosition',
        component: CursorPosition,
        exact: true,
      },
      {
        path: '/watermark',
        component: Watermark,
        exact: true,
      },
      {
        path: '/responsiveGrid',
        component: ResponsiveGrid,
        exact: true,
      },
      {
        path: '/tableRoll',
        component: TableRoll,
        exact: true,
      },
      {
        path: '/antv',
        component: Antv,
        exact: true,
      },
      {
        path: '/antd',
        component: Antd,
        exact: true,
      },
      {
        path: '/skinTheme',
        component: SkinTheme,
        exact: true,
      },
      {
        path: '/performanceObserverDemo',
        component: PerformanceObserverDemo,
        exact: true,
      },
      {
        path: '/frameStoreData',
        component: FrameStoreData,
        exact: true,
      },
    ],
  },
];
