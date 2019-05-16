import React, { useState } from 'react';
import { Layout as LayoutDocument, Menu, Icon } from 'antd';

const { Header, Sider, Content } = LayoutDocument;

const Document = () =>{
  
  //const [state, setState] = useState(false);
 let state = false;
  const toggle = () => {
    //setState(!state.collapsed);
    state = true;
  };

    return(
    <di>
     <LayoutDocument>
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <LayoutDocument>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </LayoutDocument>
      </LayoutDocument>
    </di>);
}

export default Document;