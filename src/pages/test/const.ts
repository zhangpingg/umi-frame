import { Downloader, Parser, Player } from 'svga.lite';
import DB from 'svga.lite/db';
import { Lock } from '@mrtujiawei/utils';
//import { isCorrespondingPlatform } from '@/utils';

const downloader = new Downloader();
const parser = new Parser();
const parserLock = new Lock();

// interface PlayerVM {
//   [propName: string]: Player;
// }

//const isIos = isCorrespondingPlatform('IOS');
const isIos = false;

class SvgaPlayer {
  private _element!: HTMLCanvasElement;
  private _url!: string;
  private _player!: Player;

  private options: any;

  /**
   * 关闭会出问题,在还在render的过程中销毁
   * 是否关闭完成
   */
  private destroyed = false;
  // 是否需要关闭
  private destroyFlag = false;

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
  private async _render() {
    let data: any | undefined = void 0;
    let db: any | undefined = void 0;
    if (!isIos) {
      try {
        db = new DB();
      } catch (error) {
        console.log(error);
      }
      if (db) {
        data = await db.find(this._url);
      }
    }
    if (!data) {
      const fileData = await downloader.get(this._url);
      try {
        await parserLock.lock();
        data = await parser.do(fileData);
      } finally {
        parserLock.unLock();
      }
      if (!isIos) {
        db && (await db.insert(this._url, data));
      }
    }
    this._player = new Player(this._element);

    this._player.set({
      loop: this.options.loop || 0,
      cacheFrames: false,
      intersectionObserverRender: false,
    });

    await this._player.mount(data);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this._player.$on('end', () => {
      this.options.callback && this.options.callback();
    });

    this._player.start();

    // 需要关闭但是没有实际关闭
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
