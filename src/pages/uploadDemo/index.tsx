import { useState } from 'react';
import { Upload, Button } from 'antd';
import type { UploadProps } from 'antd';

const UploadDemo = () => {
  const [fileList2, setFileList2] = useState<any[]>([
    {
      uid: '-1',
      name: 'image1.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image2.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image3.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  /** 按钮上传 */
  const uploadProps1: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      switch (info.file.status) {
        case 'uploading':
        case 'done':
        case 'removed':
          setFileList2(info.fileList);
          break;
        case 'error':
          console.log('失败: ', info.file);
          break;
      }
    },
  };
  /** 按钮-上传-已上传文件*/
  const uploadProps2: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      switch (info.file.status) {
        case 'uploading':
        case 'done':
        case 'removed':
          setFileList2(info.fileList);
          break;
        case 'error':
          console.log('失败: ', info.file);
          break;
      }
    },
    fileList: fileList2,
  };
  /** 点击/拖拽-上传 */
  const uploadProps3: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    fileList: fileList2,
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
      showDownloadIcon: true,
      removeIcon: false,
      downloadIcon: false,
    },
    onChange(info: any) {
      switch (info.file.status) {
        case 'uploading':
        case 'done':
        case 'removed':
          setFileList2(info.fileList);
          break;
        case 'error':
          console.log('失败: ', info.file);
      }
    },
    onDrop() {},
    onPreview: (file) => {
      console.log('预览', file);
    },
    onRemove: (file) => {
      console.log('移除的文件', file);
    },
    onDownload: (file: any) => {
      console.log('下载的文件', file);
    },
  };

  return (
    <div className="UF">
      <Upload {...uploadProps1}>
        <Button>上传文件</Button>
      </Upload>
      <hr />

      <Upload {...uploadProps2}>
        <Button>上传文件</Button>
      </Upload>
      <hr />

      <Upload.Dragger {...uploadProps3}>
        <p>单击或拖动文件到此区域以上传</p>
      </Upload.Dragger>
    </div>
  );
};

export default UploadDemo;
