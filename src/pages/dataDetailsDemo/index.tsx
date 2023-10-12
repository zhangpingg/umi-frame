import DataDetails from './dataDetails';
import { detailsList } from './const';

const DataDetailsDemo = () => {
  const data = {
    aa: '11',
    bb: '11',
    cc: '11',
  };

  return (
    <div>
      <DataDetails
        detailsList={detailsList}
        data={data}
        labelStyles={{ color: '#000', textAlign: 'right' }}
      />
    </div>
  );
};

export default DataDetailsDemo;
