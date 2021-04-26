import React from 'react';
import '@/styles/document.css';
import { Menu } from 'antd';
import {
  ExceptionOutlined,
  FileProtectOutlined,
  FileSyncOutlined,
  DeleteOutlined,
  LeftCircleOutlined,
} from '@ant-design/icons';

const MenuDocument = () => (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <div className="document__back">
          <p>
            {' '}
            <LeftCircleOutlined /> Quản lý tài liệu
          </p>
        </div>
        <Menu.Item key="1" icon={<FileProtectOutlined />}>
          Đã hoàn thành
        </Menu.Item>
        <Menu.Item key="2" icon={<ExceptionOutlined />}>
          Cần ký
        </Menu.Item>
        <Menu.Item key="3" icon={<FileSyncOutlined />}>
          Chờ ký
        </Menu.Item>
        <Menu.Item key="4" icon={<DeleteOutlined />}>
          Xóa
        </Menu.Item>
      </Menu>
    </>
  );

export default MenuDocument;
