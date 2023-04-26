// worker线程（需要放在public中,使用绝对路径引用）

// self指向的是WorkerGlobalScope对象，它是Worker对象的全局作用域
self.onmessage = (event) => {
  console.log(event.data); // 数据: 主线程=>worker线程
  self.postMessage('数据: worker线程=>主线程');
  throw new Error('哈哈, worker线程抛出错误啦'); // 抛出异常
};
// 监听worker线程的error事件
self.error = (event) => {
  console.log(event.message); // worker线程出错了
};
// 关闭worker
// self.close();
