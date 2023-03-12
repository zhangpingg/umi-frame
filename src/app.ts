export const qiankun = {
  // 应用加载之前: 第一次进入子应用，存储一些全部变量
  async bootstrap(props: any) {
    console.log('App1(xone-app1) bootstrap', props);
    // 获取本地配置文件
    await window
      .fetch('/xone-app1/config.json')
      .then((response) => response.json())
      .then((res) => {
        window.$webConfig = res;
      });
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('App1(xone-app1) mount', props);
    window.$store = props.store;
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('app1 unmount', props);
  },
};
