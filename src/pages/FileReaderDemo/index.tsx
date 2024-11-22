import { useRef, useState } from 'react';
import { Progress } from 'antd';

const FileReaderDemo = () => {
    const fileType = useRef('');
    const [text, setText] = useState();
    const [imgSrc1, setImgSrc1] = useState<string>();
    const [imgSrc2, setImgSrc2] = useState<string>();
    const [percent, setPercent] = useState(0);

    const changeFile1 = (e: any) => {
        setImgSrc1(URL.createObjectURL(e.target.files[0])); // blob->Blob URL (blob:xxx)
    };
    const changeFile2 = (e: any) => {
        const reader = new FileReader(); // 创建FileReader对象
        const file = e.target.files[0]; // 数组的每个元素都是一个File对象（File继承Blob）
        fileType.current = file.type;
        switch (fileType.current) {
            case 'text/plain': // xx.txt
                reader.readAsText(file); // Blob->文本 (页面展示、下载文件)
                break;
            case 'image/png': // xx.png
                reader.readAsDataURL(file); // Blob->data:URL格式的base64编码(data:xxx)(页面预览图片)
                break;
            case 'application/x-zip-compressed': // xx.zip(大文件)
            case 'text/javascript': // .js
            case 'video/vnd.dlna.mpeg-tts': // .ts
            case 'application/json': // .json
                reader.readAsArrayBuffer(file); // blob格式 => ArrayBuffer格式
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
            let blobUrl;
            switch (fileType.current) {
                case 'text/plain':
                    setText(e.target.result);
                    break;
                case 'image/png':
                    setImgSrc2(e.target.result); // reader.result 均可
                    break;
                case 'application/x-zip-compressed': // .zip
                case 'text/javascript': // .js
                case 'video/vnd.dlna.mpeg-tts': // .ts
                case 'application/json': // .json
                    blob = new Blob([e.target.result]); // ArrayBuffer格式 => blob格式
                    blobUrl = URL.createObjectURL(blob); // 在内存中创建一个Blob URL
                    a = document.createElement('a');
                    a.style.display = 'none';
                    a.download = file.name;
                    a.href = blobUrl;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(blobUrl); // 清除URL,释放内存
                    document.body.removeChild(a);
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
