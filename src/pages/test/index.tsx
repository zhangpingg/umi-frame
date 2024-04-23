import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const imgList = [
  'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
  'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
  'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
];

const Index = () => {
  return (
    <PhotoProvider>
      <PhotoView src={imgList[0]}>
        <img src={imgList[0]} style={{ width: '60px' }} />
      </PhotoView>
      <PhotoView src={imgList[1]}>
        <img src={imgList[1]} style={{ width: '60px' }} />
      </PhotoView>
    </PhotoProvider>
  );
};

export default Index;
