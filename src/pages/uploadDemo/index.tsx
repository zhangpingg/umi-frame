import { useState } from 'react';
import { Upload, Button, message } from 'antd';
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
    action: `${window.origin}/xone-api/datacenter/v1.0/attachment/jyupload`,
    data: {
      isJYFile: true,
      userId: Number(localStorage.getItem('userId')),
    },
    headers: {
      Token: localStorage.getItem('user_token')!,
    },
    fileList: fileList2,
    showUploadList: {
      showRemoveIcon: true,
      showDownloadIcon: false,
    },
    beforeUpload: (file) => {
      if (file.name.length > 90) {
        message.warning('附件名称过长，请修改后上传');
        return false;
      }
      return true;
    },
    onChange(info: any) {
      const _list = info.fileList.map((item: any) => ({
        uri: item?.response?.path,
        ...item,
      }));
      switch (info.file.status) {
        case 'uploading':
        case 'done':
        case 'removed':
          setFileList2(_list);
          break;
        case 'error':
          setFileList2(_list);
          message.error(info.file.response.message);
          break;
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
    // 自定义列表项
    // itemRender: (originNode: any, file: any) => {
    //   const title = () => (
    //     <div>
    //       {file?.name}<br />
    //       {moment(file?.response?.timestamp).format('YYYY/MM/DD hh:mm:ss')}
    //     </div>
    //   );
    //   return (
    //     <div>
    //       <Tooltip title={title}>{originNode.props.children}</Tooltip>
    //     </div>
    //   );
    // },
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
