import { useState } from 'react';

const Test = () => {
  const [imgSrc, setImgSrc] = useState<string>();

  const changeFile = (e) => {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={changeFile} />
      <img id="preview" src={imgSrc} />
    </div>
  );
};

export default Test;
