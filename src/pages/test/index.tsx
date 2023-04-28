import { useEffect, useState } from 'react';

const Test = () => {
  const [imgSrc, setImgSrc] = useState<string>();

  const changeFile = (e: any) => {
    // setImgSrc(URL.createObjectURL());
    setImgSrc(btoa(e.target.files[0]));
  };

  useEffect(() => {
    const blob = new Blob(['abcd'], { type: 'text/plain' });
    console.log(blob);
  }, []);

  return (
    <div>
      <input type="file" onChange={changeFile} />
      <img id="preview" src={imgSrc} />
    </div>
  );
};

export default Test;
