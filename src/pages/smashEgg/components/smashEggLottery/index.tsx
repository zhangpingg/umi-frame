import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Row, Col } from 'antd';
import { Toast } from 'antd-mobile';
import cn from 'classnames';
import egg from '@/images/smashEgg/egg.png';
import smashedEgg from '@/images/smashEgg/smashedEgg.png';
import eggBase from '@/images/smashEgg/egg-base.png';
import tip from '@/images/smashEgg/tip.png';
import hammer from '@/images/smashEgg/hammer.png';
import 'animate.css';
import style from './index.modules.less';

interface IndexProps {
  chanceNum: number;
  changeEgg: (index: number) => void;
}

const Index = forwardRef((props: IndexProps, ref: any) => {
  const { chanceNum = 1, changeEgg } = props;
  const tipIndexRef = useRef(-1);
  const tipShowListRef = useRef<any>([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const rowRef = useRef<any>();
  const timers = useRef<any>([]);
  const [eggList, setEggList] = useState([
    { id: 1, isShowTips: true, isSmashed: false },
    { id: 2, isShowTips: false, isSmashed: false },
    { id: 3, isShowTips: false, isSmashed: false },
    { id: 4, isShowTips: false, isSmashed: false },
    { id: 5, isShowTips: false, isSmashed: false },
    { id: 6, isShowTips: false, isSmashed: false },
    { id: 7, isShowTips: false, isSmashed: false },
    { id: 8, isShowTips: false, isSmashed: false },
    { id: 9, isShowTips: false, isSmashed: false },
  ]);
  const [smashIndex, setSmashIndex] = useState<number>(-1);

  // tip动画
  const tipAnimation = () => {
    let _index = 0;
    const timerId = setInterval(() => {
      tipIndexRef.current++;
      tipIndexRef.current =
        tipIndexRef.current >= tipShowListRef.current.length
          ? 0
          : tipIndexRef.current;
      _index =
        tipIndexRef.current >= tipShowListRef.current.length
          ? tipShowListRef.current[0]
          : tipShowListRef.current[tipIndexRef.current];
      setEggList((prev) => {
        const _list = [...prev].map((item) => {
          item.isShowTips = false;
          return item;
        });
        _list[_index].isShowTips = true;
        return _list;
      });
    }, 1500);
    timers.current.push(timerId);
  };
  // 金蛋动画
  const eggAnimation = () => {
    let _index = 0;
    const timerId1 = setInterval(() => {
      _index =
        tipIndexRef.current >= tipShowListRef.current.length
          ? tipShowListRef.current[0]
          : tipShowListRef.current[tipIndexRef.current];
      rowRef.current.children[_index].children[0].classList.add(
        'animate__animated',
        'animate__bounce',
      );
      const timerId2 = setTimeout(() => {
        rowRef.current.children[_index].children[0].classList.remove(
          'animate__animated',
          'animate__bounce',
        );
      }, 1000);
      timers.current.push(timerId2);
    }, 1500);
    timers.current.push(timerId1);
  };
  // 砸蛋
  const smashEgg = (index: number) => {
    if (smashIndex > -1) {
      return;
    }
    if (!tipShowListRef.current.includes(index)) {
      Toast.info('金蛋已砸开');
      return;
    }
    if (eggList.filter((item) => item.isSmashed).length >= chanceNum) {
      Toast.info('砸蛋机会已用完');
      return;
    }
    setSmashIndex(index);
    const timerId1 = setTimeout(() => {
      setSmashIndex(-1);
    }, 2000);
    const timerId2 = setTimeout(
      () => {
        setEggList((prev) => {
          const _list = [...prev];
          _list[index].isSmashed = true;
          return _list;
        });
        changeEgg(index);
      },
      index === 2 ? 1200 : 1500,
    );
    timers.current.push(timerId1, timerId2);
  };
  // 重置金蛋
  const resetEggList = () => {
    timers.current.map((item: any) => {
      clearTimeout(item);
      clearInterval(item);
    });
    tipIndexRef.current = -1;
    tipShowListRef.current = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    setSmashIndex(-1);
    setEggList((prev) => {
      const _list = [...prev].map((item, index) => {
        item.isShowTips = false;
        item.isSmashed = false;
        rowRef.current.children[index].children[0].classList.remove(
          'animate__animated',
          'animate__bounce',
        );
        return item;
      });
      return _list;
    });
    tipAnimation();
    eggAnimation();
  };
  // 更新金蛋列表
  const updateEggList = () => {
    const _list = eggList
      .map((item, index) => {
        if (!item.isSmashed) {
          return index;
        }
      })
      .filter((el) => !!el || el === 0);
    tipShowListRef.current = _list;
  };

  useImperativeHandle(ref, () => ({
    resetEggList,
  }));
  useEffect(() => {
    if (smashIndex < tipIndexRef.current) {
      if (tipIndexRef.current === tipShowListRef.current.length - 1) {
        updateEggList();
      }
    } else {
      updateEggList();
    }
  }, [tipIndexRef.current, eggList]);
  useEffect(() => {
    tipAnimation();
    eggAnimation();
    return () => {
      timers.current.map((item: any) => {
        clearTimeout(item);
        clearInterval(item);
      });
    };
  }, []);

  return (
    <div className={`${style.sml} por`}>
      <Row ref={rowRef}>
        {eggList.map((item, index) => (
          <Col
            span={8}
            className={`${style['sml-col']} por pb-20`}
            key={item.id}
            onClick={() => smashEgg(index)}
          >
            {item.isSmashed ? (
              <img src={smashedEgg} className={`${style['sml-col-egg']} por`} />
            ) : (
              <img src={egg} className={`${style['sml-col-egg']} por`} />
            )}
            <img src={eggBase} className={`${style['sml-col-eggBase']} poa`} />
            {item.isShowTips && (
              <img src={tip} className={`${style['sml-col-tip']} poa`} />
            )}
          </Col>
        ))}
      </Row>
      <img
        src={hammer}
        className={cn({
          [`${style['sml-hammer']} poa`]: true,
          [style['sml-hammerSwing']]: smashIndex === -1,
          [style[`sml-hammerProcess${smashIndex}`]]: true,
        })}
      />
    </div>
  );
});

export default Index;
