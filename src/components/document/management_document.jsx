import React from 'react';
import { Typography , Menu } from 'antd';
import ButtonFilter from '@/components/document/button_filter';
import ListDocument from '@/components/document/list-document';


const { Title } = Typography;
const menu = (
  <Menu>
    <Menu.Item key="0">Tât cả</Menu.Item>
    <Menu.Item key="1">Ngày tạo</Menu.Item>
    <Menu.Item key="2">Người tạo</Menu.Item>
  </Menu>
);

const ManagementDocument = () => (
    <div>
      <Title level={4}>Danh sách bản mẫu</Title>
      <p style={{ opacity: '0.6', margin: '0' }}>Lọc theo</p>
      <ButtonFilter title="Tất cả" menu={menu} />
      <ListDocument />
    </div>
  );

export default ManagementDocument;
