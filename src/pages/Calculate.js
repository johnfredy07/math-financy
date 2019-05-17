import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';

const Calculate = ({ values }) => {
  console.log('val', values);

  const calculateAmount = () => {
    if (values.typeInterest === "simple") {
      return values.presentAmount * (1 + (values.periods * values.interest));
    } else {
      return 0;
    }
  }

  const calculateInterst = () => {
    if (values.typeInterest === "simple") {
      //return ((calculateAmount() / values.presentAmount) - 1) * (1 / values.periods);
      return values.presentAmount * values.interest * values.periods;
    } else {
      return 0;
    }
  }

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Valor futuro"
              value={calculateAmount()}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<Icon type="arrow-up" />}
              suffix="$"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Interés"
              value={calculateInterst()}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<Icon type="arrow-down" />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>)
}

export default Calculate;