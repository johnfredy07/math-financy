import React from 'react';
import { Layout as LayoutDocument, Menu, Breadcrumb } from 'antd';

const { Header, Footer, Content } = LayoutDocument;

const Document = () => {

  return (
    <LayoutDocument>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Proyección financiera</Menu.Item>
          <Menu.Item key="2">Acerda de</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Evaluación de proyectos ©2019-1 Creado por:
      <p>John <br /> Ana <br/>Alex <br/>Esteban <br/>Ivan</p></Footer>
    </LayoutDocument>);
}

export default Document;