import { useState } from 'react';
import { Button } from 'antd';
import { KeepAlive, AliveScope, useAliveController } from 'react-activation';
import _ from 'lodash';
import Child1 from './components/child1';
import Child2 from './components/child2';
import Child3 from './components/child3';

const ReactActivationDemo = () => {
  const { dropScope } = useAliveController();
  const [menuList, setMenuList] = useState<string[]>([]);
  const [currentMenuId, setCurrentMenuId] = useState('');

  /** 打开菜单 */
  const openMenu = (menuId: string) => {
    setCurrentMenuId(menuId);
    setMenuList((prev: string[]) => {
      return !prev.includes(menuId) ? [...prev, menuId] : prev;
    });
  };
  /** 清除缓存 */
  const clearCache = (menuId: string) => {
    const index = menuList.findIndex((id: string) => id === menuId);
    if (index > -1) {
      const list = _.cloneDeep(menuList);
      list.splice(index, 1);
      setMenuList(list);
      dropScope(menuId);
    }
  };

  return (
    <div>
      <Button
        onClick={() => {
          openMenu('MenuId1');
        }}
      >
        打开子应用1
      </Button>
      <Button
        onClick={() => {
          openMenu('MenuId2');
        }}
      >
        打开子应用2
      </Button>
      <Button
        onClick={() => {
          openMenu('MenuId3');
        }}
      >
        打开子应用3
      </Button>{' '}
      <br />
      <Button
        onClick={() => {
          clearCache('MenuId1');
        }}
      >
        清除子应用1
      </Button>
      <Button
        onClick={() => {
          clearCache('MenuId2');
        }}
      >
        清除子应用2
      </Button>
      <Button
        onClick={() => {
          clearCache('MenuId3');
        }}
      >
        清除子应用3
      </Button>
      <AliveScope>
        {menuList.map((menuId: string) => {
          if (menuId === currentMenuId) {
            let ChildX: any;
            switch (currentMenuId) {
              case 'MenuId1':
                ChildX = <Child1 />;
                break;
              case 'MenuId2':
                ChildX = <Child2 />;
                break;
              case 'MenuId3':
                ChildX = <Child3 />;
                break;
            }
            return (
              <div key={menuId}>
                <KeepAlive name={menuId} id={menuId} cacheKey={menuId}>
                  {ChildX}
                </KeepAlive>
              </div>
            );
          }
          return null;
        })}
      </AliveScope>
    </div>
  );
};

export default ReactActivationDemo;
