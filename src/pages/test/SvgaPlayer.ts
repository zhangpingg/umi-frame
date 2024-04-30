// SVGA 是一种基于 SVG（可缩放矢量图形）的动画格式

import { Downloader, Parser, Player } from 'svga.lite';
import DB from 'svga.lite/db'; // 处理 SVGA 文件数据库的类
import { Lock } from '@mrtujiawei/utils';
//import { isCorrespondingPlatform } from '@/utils';

const downloader = new Downloader();
const parser = new Parser(); // Parser类用于解析 SVGA（可缩放矢量图形动画）文件的数据
const parserLock = new Lock();

//const isIos = isCorrespondingPlatform('IOS');
const isIos = false;

class SvgaPlayer {
  private _element!: HTMLCanvasElement; // Dom,私有的,只能在类内部被访问。"非空"断言
  private _url!: string;
  private _player!: Player;
  private options: any;
  private destroyed = false; // 关闭会出问题,在还在render的过程中销毁,是否关闭完成
  private destroyFlag = false; // 是否需要关闭

  constructor(
    element: string | HTMLCanvasElement,
    url: string,
    options: any = {},
  ) {
    this._element =
      typeof element === 'string'
        ? (document.querySelector(element) as HTMLCanvasElement)
        : element;
    this._url = url;
    this._render();
    this.options = options;
  }
  // 私有方法
  private async _render() {
    let data: any | undefined = void 0; //void 0 等于undefined
    let db: any | undefined = void 0; // db 数据库的缩写
    if (!isIos) {
      try {
        db = new DB();
      } catch (error) {
        console.log(error);
      }
      if (db) {
        data = await db.find(this._url); // 查找与 url 对应的 SVGA 文件记录
      }
    }
    if (!data) {
      const fileData = await downloader.get(this._url); // 下载 SVGA 数据
      try {
        await parserLock.lock(); // 锁住
        data = await parser.do(fileData); // 解析 SVGA 数据 （里面报错了？？）
      } finally {
        parserLock.unLock(); // 解锁
      }
      if (!isIos) {
        db && (await db.insert(this._url, data)); // 将新的 SVGA 文件数据插入到数据库中
      }
    }
    this._player = new Player(this._element); // 创建一个SVG动画播放器，并绑定到canvas元素

    this._player.set({
      loop: this.options.loop || 0, // 循环次数 0-循环播放
      cacheFrames: false, // 是否缓存帧
      intersectionObserverRender: false, // 是否开启动画容器视窗检测
    });

    await this._player.mount(data); // 播放器初始化
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // 动画播放结束时触发
    this._player.$on('end', () => {
      this.options.callback && this.options.callback();
    });

    this._player.start(); // 播放开始

    // 需要关闭，但是没有实际关闭
    if (this.destroyFlag && !this.destroyed) {
      this._player.destroy();
    }
    return;
  }
  public destroy() {
    if (this.destroyed) {
      return false;
    }
    this.destroyFlag = true;
    if (this._player) {
      this._player.destroy();
      this.destroyed = true;
    }
  }
}
export default SvgaPlayer;
