import { useEffect, useState } from 'react';

const Test = () => {
  const [imgSrc, setImgSrc] = useState<string>();

  const changeFile = (e) => {
    // setImgSrc(URL.createObjectURL());
    setImgSrc(btoa(e.target.files[0]));
  };
  useEffect(() => {
    // const str1 = btoa("abcd");    // 编码: YWJjZA==
    // const str2 = atob(str1);      // 解码: abcd
  }, []);

  return (
    <div>
      <input type="file" onChange={changeFile} />
      <img id="preview" src={imgSrc} />
    </div>
  );
};

export default Test;
