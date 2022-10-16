const Layouts = '@/layouts';
const Index = '@/pages/index'
const LocalResources = '@/pages/localResources'
const PageB = '@/pages/pageB'

export default [
  {
    path: '/',
    component: Layouts,
    routes: [
      { path: '/', redirect: '/index', },
      { path: '/index', component: Index, exact: true },
      { path: '/localResources', title: '本地资源', component: LocalResources, exact: true },
      { path: '/pageB', title: '页面B', component: PageB, exact: true },
    ],
  }
];