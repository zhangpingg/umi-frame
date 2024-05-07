import { StickyContainer, Sticky } from 'react-sticky';

const Index = () => {
  return (
    <div style={{ width: '400px', border: '1px solid #000' }}>
      <StickyContainer>
        <Sticky>
          {(props: any) => (
            <div style={props.style}>
              <h1>粘性头部</h1>
            </div>
          )}
        </Sticky>
        <div style={{ height: '800px', overflow: 'auto' }}>页面内容</div>
      </StickyContainer>
    </div>
  );
};

export default Index;
