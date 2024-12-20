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
            {
                path: '/createPortalDemo',
                component: '@/pages/createPortalDemo',
                exact: true,
            },
            {
                path: '/workerDemo',
                component: '@/pages/workerDemo',
                exact: true,
            },
            {
                path: '/FileReaderDemo',
                component: '@/pages/FileReaderDemo',
                exact: true,
            },
            {
                path: '/uploadDemo',
                component: '@/pages/uploadDemo',
                exact: true,
            },
            {
                path: '/uploadDemoTwo',
                component: '@/pages/uploadDemoTwo',
                exact: true,
            },
            {
                path: '/sparkMD5Demo',
                component: '@/pages/sparkMD5Demo',
                exact: true,
            },
            {
                path: '/reactActivationDemo',
                component: '@/pages/reactActivationDemo',
                exact: true,
            },
            {
                path: '/longList',
                component: '@/pages/longList',
                exact: true,
            },
            {
                path: '/useImperativeHandleDemo',
                component: '@/pages/useImperativeHandleDemo',
                exact: true,
            },
            {
                path: '/useContextDemo',
                component: '@/pages/useContextDemo',
                exact: true,
            },
            {
                path: '/dataDetailsDemo',
                component: '@/pages/dataDetailsDemo',
                exact: true,
            },
            {
                path: '/domToImageDemo',
                component: '@/pages/domToImageDemo',
                exact: true,
            },
            {
                path: '/lotteryDraw',
                component: '@/pages/lotteryDraw',
                exact: true,
            },
            {
                path: '/animateDemo',
                component: '@/pages/animateDemo',
                exact: true,
            },
            {
                path: '/smashEggH5',
                component: '@/pages/smashEggH5',
                exact: true,
            },
            {
                path: '/modalScrollInIOSH5',
                component: '@/pages/modalScrollInIOSH5',
                exact: true,
            },
            {
                path: '/scrollListH5',
                component: '@/pages/scrollListH5',
                exact: true,
            },
            {
                path: '/compressImg',
                component: '@/pages/compressImg',
                exact: true,
            },
            {
                path: '/svgaDemo',
                component: '@/pages/svgaDemo',
                exact: true,
            },
            {
                path: '/stickyDemo',
                component: '@/pages/stickyDemo',
                exact: true,
            },
            {
                path: '/curveAnimation',
                component: '@/pages/curveAnimation',
                exact: true,
            },
            {
                path: '/ellipsisDemo',
                component: '@/pages/ellipsisDemo',
                exact: true,
            },
        ],
    },
];
