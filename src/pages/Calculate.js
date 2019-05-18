import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';
import Title from '../Components/Title';

const Calculate = ({ values }) => {
  console.log('val', values);

const periods = () => {
  const val = ((values.futureamount / values.presentAmount) - 1) * (1 / values.interest);
  return values.typeCalculate === "numberperiods" ? val : values.periods;
}

  const calculatePresent = () => {
    if (values.typeInterest === "simple") {
      const amount = calculateFuture() / (1 + (periods() * values.interest));
      return amount === 0 || values.interest === 0 ? values.presentAmount : amount;
    } else {
      return calculateFuture() / Math.pow((1 + values.interest),periods());
    }
  }

  const calculateFuture = () => {
    if (values.typeInterest === "simple") {
      const amount =  values.presentAmount * (1 + (periods() * values.interest));
      return amount === 0 || values.interest === 0 ? values.futureamount : amount;
    } else {
      return values.presentAmount * Math.pow((1 + values.interest),periods());
    }
  }

  const calculatePeriods = () => {
    if (values.typeInterest === "simple") {
      return values.interest === 0 ? 
      values.periods : ((calculateFuture() / calculatePresent()) - 1) * (1 / values.interest);
    } else {
      return Math.log((calculateFuture() / calculatePresent())) / Math.log(1 + values.interest);
    }
  }

  const calculateInterst = () => {
    if (values.typeInterest === "simple") {
      return ((calculateFuture() / calculatePresent()) - 1) * (1 / periods());
    } else {
      return Math.pow((calculateFuture() / calculatePresent()), 1 / periods()) - 1;
    }
  }

  const calculateAmountInterst = () => {
      return calculateFuture() - calculatePresent();
  }

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Title text="Resultados"/>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Row gutter={4}>
              <Col span={6}>
                <Statistic
                  title="Valor Presente"
                  value={calculatePresent()}
                  precision={0}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="arrow-right" />}
                  suffix="$"
                />
              </Col>
              <Col span={6}>
                <Statistic
                  title="Valor futuro"
                  value={calculateFuture()}
                  precision={0}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="arrow-up" />}
                  suffix="$"
                />
              </Col>
              <Col span={6}>
                <Statistic
                  title="Periodos"
                  precision={0}
                  value={calculatePeriods()}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="monitor" />}
                />
              </Col>              
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Row gutter={4}>
              <Col span={6}>
                <Statistic
                  title="Interés"
                  value={calculateInterst().toFixed(2)}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<Icon type="arrow-down" />}
                  suffix="%"
                />
              </Col>
              <Col span={6}>
                <Statistic
                  title="Valor interés"
                  value={calculateAmountInterst()}
                  precision={0}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<Icon type="arrow-down" />}
                  suffix="$"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>)
}

export default Calculate;