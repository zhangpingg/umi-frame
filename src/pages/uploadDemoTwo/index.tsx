import { useState } from 'react';
import { Upload, Button } from 'antd';
import WxImageViewer from 'react-wx-images-viewer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzYyMTgxNDAxNF9kdCIsInNjb3BlcyI6WyJob21lIl0sImlzcyI6InNlY3VyaXR5IiwiaWF0IjoxNzEzODYzMTQwLCJleHAiOjE3MTM4NzUxNDB9.R-aclI-sdK1qRrZpjm9j6t3IZSYw41xUtr8gfP6xO2KbXHIA7LK3DORwQOZDSR_dTZGvUPaEE843lSOIGyEWtQ';

const Index = () => {
  const [imgList, setImgList] = useState<any[]>([
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  /** 按钮上传 */
  const uploadProps1 = {
    name: 'file',
    accept: '.png,.jpg,.jpeg',
    action: '/apiUpload/upload/fileUpload', // 测试环境
    headers: {
      Authorization: token,
      'supplier-domain': 'dt',
    },
    onChange(res: any) {
      console.log(11, res);
      switch (res.file.status) {
        case 'done':
          setImgList([...imgList, res.file.response.data]);
          break;
        case 'error':
          console.log('失败: ', res.file);
          break;
        default:
          break;
      }
    },
  };
  // 关闭预览
  const onClose = () => {
    setIsOpen(false);
  };
  // 打开预览
  const openViewer = (index: number) => {
    setIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <div>
        {imgList.map((item, index) => (
          <img
            src={item}
            key={index}
            style={{ width: '100px', height: '100px' }}
          />
        ))}
      </div>
      <Upload {...uploadProps1}>
        <Button>上传照片</Button>
      </Upload>
      <hr />
      <div>
        {imgList.map((item, index) => {
          return (
            <div className="img" key={item}>
              <img
                src={item}
                onClick={() => openViewer(index)}
                width="60px"
                height="auto"
              />
            </div>
          );
        })}
      </div>
      {isOpen && (
        <WxImageViewer onClose={onClose} urls={imgList} index={index} />
      )}
      <hr />
      <PhotoProvider>
        <PhotoView src={imgList[0]}>
          <img src={imgList[0]} style={{ width: '60px' }} />
        </PhotoView>
        <PhotoView src={imgList[1]}>
          <img src={imgList[1]} style={{ width: '60px' }} />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};

export default Index;
