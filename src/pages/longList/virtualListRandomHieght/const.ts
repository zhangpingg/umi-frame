/** 获取随机内容 */
const getRandomContent = (minLength: number, maxLength: number) => {
  const characters =
    '果园里，不知是满园春色渲染了阳春三月，还是阳春三月醉了满园花。走进桃林，远远望去，是满眼的粉红，一望无际，看不到尽头。折一枝桃花，便是剪下三月时光。沾满春雨的花瓣，随着微风漫天飞舞，轻触了我的眉梢，我的心湖泛起层层涟漪，使我忘不了她的幽香、婉约和静美。在这个花开的季节里，桃花是那样的多彩。又有多少文人墨客在这里泼墨挥毫，想留住它的韵、它的魂，可这一切似乎都显得过于苍白，再雅的水墨丹青也难临摹她的倩影，她的雅致，她那似梅花的魂魄，只能化用曹雪芹的诗句"偷来梨蕊三分白，借得‘桃花’一缕魂"来赞美她吧！';
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export { getRandomContent };
