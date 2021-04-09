import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import styles from 'styles/home.module.css';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { useHistory, useLocation } from 'react-router-dom';

export default function HomePage() {
  const router = useHistory();
  const location = useLocation();
  return (
    <Layout className="layout">
      <Header>
        <div className={styles.logo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {['/', '/login', '/register'].map((route) => (
            <Menu.Item key={route} onClick={() => navigate(route)}>
              {route}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.siteLayoutContent}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );

  function navigate(route) {
    if (location.pathname !== route) router.push(route);
  }
}
