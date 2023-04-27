import { useRef, useState } from 'react';
import { Progress } from 'antd';

const FileReaderDemo = () => {
  const fileType = useRef('');
  const [text, setText] = useState();
  const [imgSrc1, setImgSrc1] = useState<string>();
  const [imgSrc2, setImgSrc2] = useState<string>();
  const [percent, setPercent] = useState(0);

  const changeFile1 = (e: any) => {
    setImgSrc1(URL.createObjectURL(e.target.files[0])); // 转换为Blob URL（blob:xxx）（blob => Object URL）
  };
  const changeFile2 = (e: any) => {
    const reader = new FileReader();
    const file = e.target.files[0]; // 数组的每个元素都是一个File对象
    fileType.current = file.type;
    switch (fileType.current) {
      case 'text/plain': // 纯文本文档（xx.txt）
        reader.readAsText(file);
        break;
      case 'image/png': // 图片（xx.png）（blob => base64）
        reader.readAsDataURL(file); // 加载二进制数据，并转换为data:URL格式的Base64字符串（data:xxx）
        break;
      case 'application/x-zip-compressed': // xx.zip（大文件）（blob => ArrayBuffer）
        reader.readAsArrayBuffer(file);
        break;
    }
    // 监听上传进度
    reader.onprogress = (e) => {
      if (e.loaded && e.total) {
        setPercent((e.loaded / e.total) * 100);
      }
    };
    // 文件读取完成
    reader.onload = (e: any) => {
      let blob;
      let a;
      switch (fileType.current) {
        case 'text/plain':
          setText(e.target.result);
          break;
        case 'image/png':
          setImgSrc2(e.target.result); // reader.result 均可
          break;
        case 'application/x-zip-compressed': // 暂时下载不了
          blob = new Blob([e.target.result]);
          a = document.createElement('a');
          a.style.display = 'none';
          // a.download = fileName;
          // 生成一个临时的Blob URL（现在下载不了，因为生产的url不是真实的下载地址）
          a.href = window.URL.createObjectURL(blob);
          document.body.appendChild(a);
          // a.click();
          window.URL.revokeObjectURL(a.href); // 释放createObjectURL创建得对象
          break;
      }
    };
  };

  return (
    <div>
      <input type="file" onChange={changeFile1} />
      <input type="file" onChange={changeFile2} />
      <p>{text}</p>
      <img src={imgSrc1} />
      <img src={imgSrc2} />
      <Progress percent={percent} />
    </div>
  );
};

export default FileReaderDemo;
