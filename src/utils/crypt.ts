import { AES, enc, mode, pad } from 'crypto-js'; // var CryptoJS = require("crypto-js");

/** 加密 */
const aesEncrypt = (password: string, secretkey = 'zhangpingmiyao'): string => {
  /**
   * CipherOption, 加密的一些选项:
   *   mode: 加密模式, 可取值(CBC, CFB, CTR, CTRGladman, OFB, ECB), 都在 mode 对象下
   *   padding: 填充方式, 可取值(Pkcs7, AnsiX923, Iso10126, Iso97971, ZeroPadding, NoPadding),
   *      都在 pad 对象下
   *   iv: 偏移量, mode === ECB 时, 不需要 iv
   * 返回的是一个加密对象
   */
  // 把密码加密后，转成字符串
  const encryptData = AES.encrypt(password, secretkey, {
    mode: mode.ECB,
    padding: pad.Pkcs7,
  }).toString();
  const utf8StrArray = enc.Utf8.parse(encryptData); // 将密码字符串转换为utf8字符数组
  const base64Data = enc.Base64.stringify(utf8StrArray); // 将密码utf8字符数组转换为密码base64数据
  return base64Data;
};

/** 解密 */
const aesDecrypt = (password: string, secretkey = 'zhangpingmiyao'): string => {
  const utf8StrArray = enc.Base64.parse(password); // 将密码base64数据还原为utf8字符数组
  const utf8Data = utf8StrArray.toString(enc.Utf8); // 将密码utf8字符数组再转为utf8数据
  // 解密
  const cipher = AES.decrypt(utf8Data, secretkey, {
    mode: mode.ECB,
    padding: pad.Pkcs7,
  }).toString(enc.Utf8);
  return cipher;
};
export { aesEncrypt, aesDecrypt };
