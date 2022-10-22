// app.ts
export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('第一次进入子应用，存储一些全部变量');
  },
  async mount(props: any) {
    console.log('mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('app1 unmount', props);
  },
};
