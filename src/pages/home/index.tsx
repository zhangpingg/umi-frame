import { history } from 'umi';
import { Button } from 'antd';
import { useCallback } from 'react';

const Home = () => {
    const jumpPage = useCallback((path) => {
        history.push(`/${path}`);
    }, []);

    return (
        <div className={'global-box'}>
            <Button type="link" onClick={() => jumpPage('test')}>
                test
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('localResources')}>
                本地静态资源
            </Button>{' '}
            <br />
            <Button type="link" onClick={() => jumpPage('useRedux')}>
                @reduxjs/toolkit
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('useDva')}>
                dva
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('useTableReducerDemo')}>
                useTableReducer demo使用
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('useSetIntervalDemo')}>
                useSetInterval demo使用
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('useApi')}>
                调接口
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('cursorPosition')}>
                获取光标、设置光标、插入数据
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('watermark')}>
                水印
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('responsiveGrid')}>
                react-grid-layout 响应布局
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('tableRoll')}>
                table 内容自动滚动
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('antv')}>
                antv 图表
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('antd')}>
                antd
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('skinTheme')}>
                换肤
            </Button>
            <br />
            <Button
                type="link"
                onClick={() => jumpPage('performanceObserverDemo')}
            >
                PerformanceObserver 监听请求资源
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('frameStoreData')}>
                获取基座的缓存数
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('memoDemo')}>
                memo 例子
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('cryptojs')}>
                crypto-ts 加密解密
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('mouseRightClick')}>
                自定义鼠标右击
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('createPortalDemo')}>
                创建节点在 DOM 组件的层次结构之外, 如modal,message等
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('workerDemo')}>
                Worker 多线程
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('FileReaderDemo')}>
                FileReader异步读取文件 (读取blob对象中的数据)
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('uploadDemo')}>
                Upload 各种上传方式
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('uploadDemoTwo')}>
                Upload 各种上传方式two，预览图片（更简单）
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('sparkMD5Demo')}>
                spark-md5 计算文件内容的 hash
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('reactActivationDemo')}>
                react-activation(依赖) 缓存组件，保留组件状态
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('longList')}>
                大数据-长列表【时间分片 |
                虚拟列表（列表项固定高度|列表项随机高度）】
            </Button>
            <br />
            <Button
                type="link"
                onClick={() => jumpPage('useImperativeHandleDemo')}
            >
                父组件调用子组件方法-useImperativeHandle
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('useContextDemo')}>
                父子传值-useContext
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('dataDetailsDemo')}>
                详情组件 (后期迁移到zp-design组件库中)
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('domToImageDemo')}>
                Dom转换为图片
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('lotteryDraw')}>
                转盘/九宫格/老虎机-抽奖
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('animateDemo')}>
                Animate.css动画
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('smashEggH5')}>
                砸金蛋抽奖【H5移动端】
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('modalScrollInIOSH5')}>
                IOS：弹框中滚动内容，影响了父页面滚动【H5移动端】
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('scrollListH5')}>
                无线滚动【H5移动端】
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('compressImg')}>
                压缩图片
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('svgaDemo')}>
                播放SVGA格式动画
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('stickyDemo')}>
                粘性布局-如粘性导航栏，侧边栏等
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('curveAnimation')}>
                两固定点之间-实现曲线运动
            </Button>
            <br />
            <Button type="link" onClick={() => jumpPage('ellipsisDemo')}>
                省略号（单行、多行、更多等）
            </Button>
            <br />
        </div>
    );
};
export default Home;
