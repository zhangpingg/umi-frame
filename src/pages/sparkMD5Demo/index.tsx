import { useEffect } from 'react';
import sparkMD5 from 'spark-md5';

const SparkMD5Demo = () => {
  /** 计算字符串hash */
  const calStrHash = () => {
    const hash = sparkMD5.hashBinary('11'); // 6512bd43d9caa6e02c990b0a82652dca
    console.log('字符串hash:', hash);
  };
  /** 上传文件后，计算文件内容的hash */
  const changeFile = (e: any) => {
    const spark = new sparkMD5.ArrayBuffer(); // 创建md5实例（因为创建是ArrayBuffer，所以下面接收的也是这种格式）
    const reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]); // Blob格式转换为ArrayBuffer格式
    reader.onload = (e: any) => {
      spark.append(e.target.result);
      const hash = spark.end(); // 文件内容的hash（5ee062942e1c969f1215859aff653268）
      console.log('文件内容的hash:', hash);
    };
  };

  useEffect(() => {
    calStrHash();
  }, []);

  return (
    <div>
      <input type="file" onChange={changeFile} />
    </div>
  );
};

export default SparkMD5Demo;
