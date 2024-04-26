import { useState } from 'react';
import Compressor from 'compressorjs';

const Index = () => {
  const [file, setFile] = useState<any>();

  // 上传图片
  const changeImg = (e: any) => {
    setFile(e.target.files[0]);
  };
  // 压缩图片
  const compressImg = () => {
    // 方式1：直接把file传进去
    // 方式2：把文件流转换成blob的格式，再传进去
    //const blob = new Blob([file], { type: file.type });
    const compressor: any = new Compressor(file, {
      quality: 0.8, // 压缩质量，0.5-1之间
      success(result: any) {
        console.log('压缩成功，结果为：', result);
        // 你可以将result设置为要上传或使用的压缩后的图片
      },
      error(err: any) {
        console.error('压缩失败，错误信息：', err);
      },
    });
    console.log(12, compressor);
  };

  return (
    <div>
      <input type="file" onChange={changeImg} />
      <button onClick={compressImg}>压缩图片</button>
    </div>
  );
};

export default Index;
