import { useRef } from 'react';
import { Button } from 'antd';
import SmashEggLottery from './components/smashEggLottery';
//import './styles.scss';

const Index = () => {
  //const smashEggLotteryRef = useRef<{ resetEggList: Function }>(null);
  const smashEggLotteryRef = useRef<any>(null);

  // 砸中金蛋
  const changeEgg = (index: number) => {
    console.log('砸的金蛋索引: ', index);
  };
  // 重置
  const resetEgg = () => {
    smashEggLotteryRef?.current?.resetEggList();
  };

  return (
    <div>
      <SmashEggLottery
        ref={smashEggLotteryRef}
        chanceNum={2}
        changeEgg={changeEgg}
      />
      <Button type="primary" onClick={resetEgg}>
        重置金蛋
      </Button>
    </div>
  );
};

export default Index;
