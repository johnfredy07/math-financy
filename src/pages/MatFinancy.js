import React, { useState } from 'react';
import { Form, Select, Button, InputNumber, Row, Col } from 'antd';
import Calculate from '../pages/Calculate';
import Title from '../Components/Title';

const { Option } = Select;

const MatFinancy = (props) => {

  const [inputValue, setInputValue] = useState({});
  const [calculate, setCalculate] = useState(false);
  const [hidden, setHidden] = useState("amountfuture");

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        setCalculate(true);
        setInputValue(values);
      }
    });
  };

  const handleReset = e => {
    setCalculate(false);
    props.form.resetFields();
  }

  const handleChangeType = value => {
    console.log(value);
    handleReset();
  };

  const handleChangeCalculate = value => {
    console.log(value);
    setHidden(value);
  };

  const { getFieldDecorator } = props.form;

  return (
    <div>
      <Title text="Calculos matemáticas financieras"/>
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit}>
        <Form.Item label="Tipo de interés">
          {getFieldDecorator('typeInterest', {
            rules: [{ required: true, message: 'Seleccione tipo de interés' }],
            initialValue: "simple",
          })(
            <Select
              className="width-Select"
              placeholder="Seleccione tipo de interés"
              onChange={handleChangeType}
            >
              <Option value="simple">Simple</Option>
              <Option value="compuesto">Compuesto</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="Tipo de calculo">
          {getFieldDecorator('typeCalculate', {
            rules: [{ required: true, message: 'Seleccione tipo de calculo' }],
            initialValue: "amountfuture",
          })(
            <Select
              className="width-Select"
              placeholder="Seleccione tipo de calculo"
              onChange={handleChangeCalculate}
            >
              <Option value="amountfuture">Valor futuro</Option>
              <Option value="amountpresent">Valor presente</Option>
              <Option value="tasainterest">Tasa de interés</Option>
              <Option value="numberperiods">Número de periodos</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="Valor presente"
          style={{ display: hidden === "amountpresent" ? "none" : "block" }}>
          {getFieldDecorator('presentAmount', {
            rules: [{ required: true, message: 'Ingrese el valor presente', }],
            initialValue: 1,
          })(
            <InputNumber
              className="width-Number"
              min={1}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />)}
        </Form.Item>
        <Form.Item label="Valor futuro"
          style={{ display: hidden === "amountfuture" ? "none" : "block" }}>
          {getFieldDecorator('futureamount', {
            rules: [{ required: true, message: 'Ingrese el valor futuro', }],
            initialValue: 1,
          })(
            <InputNumber
              className="width-Number"
              min={1}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />)}
        </Form.Item>
        <Form.Item label="Interés"
          style={{ display: hidden === "tasainterest" ? "none" : "block" }}>
          {getFieldDecorator('interest', {
            rules: [{ required: true, message: 'Ingrese el interés' }],
            initialValue: 0,
          })(
            <InputNumber
              className="width-Number"
              min={0}
              max={1}
              formatter={value => `${value}%`}
              parser={value => value.replace('%', '')}
            />)}
        </Form.Item>
        <Form.Item label="Periodos (meses)"
          style={{ display: hidden === "numberperiods" ? "none" : "block" }}>
          {getFieldDecorator('periods', {
            rules: [{ required: true, message: 'Ingrese el número de periodos' }],
            initialValue: 1,
          })(
            <InputNumber
              className="width-Number"
              min={0}
            />)}
        </Form.Item>  
        <Form.Item wrapperCol={{ xs:24,sm:8, offset: 5 }}>
          <Row gutter={36}>
            <Col xs={9} sm={8}>
              <Button type="primary" htmlType="submit">
                Calcular
            </Button>
            </Col>
            <Col xs={9} sm={8}>
              <Button type="default" htmlType="reset" onClick={handleReset}>
                Limpiar
            </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
      {calculate ?
        <Calculate values={inputValue} /> : ''}
    </div>
  );
}

export default Form.create({ name: 'coordinated' })(MatFinancy);