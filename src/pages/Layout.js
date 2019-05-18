import React from 'react';
import { Layout as LayoutDocument, Menu, Breadcrumb } from 'antd';
import MatFinancy from '../pages/MatFinancy';

const { Header, Footer, Content } = LayoutDocument;

const Document = () => {

  return (
    <LayoutDocument className="secondary-color">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">MATEMÁTICA FINANCIERA</Menu.Item>
          {/* <Menu.Item key="2">Acerda de</Menu.Item> */}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        <MatFinancy/>
        </div>
      </Content>
      <Footer className="footer">Evaluación de proyectos ©2019-1 Creado por:
      <p>Jhon Fredy Guzman <br /> 
      Ana Maria Osorio <br/>
      Alexander Mejia <br/>
      Esteban Monsalve <br/>
      Ivan Berrio</p></Footer>
    </LayoutDocument>);
}

export default Document;