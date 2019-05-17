import React, { useState } from 'react';
import { Form, Select, Button, InputNumber } from 'antd';
import Calculate from '../pages/Calculate';

const { Option } = Select;

const MatFinancy = (props) => {

  const [inputValue, setInputValue] = useState({});
  const [calculate, setCalculate] = useState(false);

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

  const handleSelectChange = value => {
    console.log(value);
    // props.form.setFieldsValue({
    //   note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    // });
  };
  const { getFieldDecorator } = props.form;

  return (
    <div>
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit}>
        <Form.Item label="Tipo de interés">
          {getFieldDecorator('typeInterest', {
            rules: [{ required: true, message: 'Seleccione tipo de interés' }],
            initialValue: "simple",
          })(
            <Select
              placeholder="Seleccione tipo de interés"
              onChange={handleSelectChange}
            >
              <Option value="simple">Simple</Option>
              <Option value="compuesto">Compuesto</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="Valor presente">
          {getFieldDecorator('presentAmount', {
            rules: [{ required: true, message: 'Ingrese el valor presente', }],
            initialValue: 1,
          })(
            <InputNumber
              min={1}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />)}
        </Form.Item>
        <Form.Item label="Interés">
          {getFieldDecorator('interest', {
            rules: [{ required: true, message: 'Ingrese el interés' }],
            initialValue: 0,
          })(
            <InputNumber
              min={0}
              formatter={value => `${value}%`}
              parser={value => value.replace('%', '')}
            />)}
        </Form.Item>
        <Form.Item label="Periodos (meses)">
          {getFieldDecorator('periods', {
            rules: [{ required: true, message: 'Ingrese el número de periodos' }],
            initialValue: 1,
          })(
            <InputNumber
              min={0}
            />)}
        </Form.Item>        
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Calcular
        </Button>
        </Form.Item>
      </Form>
      {calculate ?
        <Calculate values={inputValue} /> : ''}
    </div>
  );
}

export default Form.create({ name: 'coordinated' })(MatFinancy);