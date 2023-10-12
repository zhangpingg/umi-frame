import { FC } from 'react';
import { Row, Col } from 'antd';
import styles from './index.module.less';

interface DataDetailsProps {
  detailsList: Object[];
  data: any;
  labelSpan?: number;
  labelStyles?: any;
}

const DataDetails: FC<DataDetailsProps> = (props) => {
  const { detailsList = [], data = {}, labelSpan = 8, labelStyles } = props;

  return (
    <div className={styles['container']}>
      <Row>
        {detailsList.map((item: any, index: number) => {
          return (
            <Col
              key={index}
              span={item.colSpan || 12}
              className={styles['container-row']}
            >
              <Row>
                <Col
                  span={labelSpan}
                  className={styles['container-row-label']}
                  style={labelStyles}
                >
                  {item.label}
                </Col>
                <Col span={24 - labelSpan}>
                  {item?.render?.(data) || data?.[item.value]}
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default DataDetails;
