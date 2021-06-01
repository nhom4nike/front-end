import React from 'react';
import '@/styles/document.scss';
import { Menu } from 'antd';
import {
  ExceptionOutlined,
  FileProtectOutlined,
  FileSyncOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';

const MenuDocument = ({ onChangeActive }) => (
  <>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <div className="go-back">
        <div className="go-back__icon">
          <i className="fa fa-angle-left fa-3x" aria-hidden="true" />
        </div>
        <p className="go-back__text">Quản lý tài liệu</p>
      </div>
      <Menu.Item
        key="1"
        icon={<FileProtectOutlined />}
        onClick={() => {
          onChangeActive(1);
        }}
      >
        Đã hoàn thành
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<ExceptionOutlined />}
        onClick={() => {
          onChangeActive(2);
        }}
      >
        Cần ký
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<FileSyncOutlined />}
        onClick={() => {
          onChangeActive(3);
        }}
      >
        Chờ ký
      </Menu.Item>
      <Menu.Item
        key="4"
        icon={<DeleteOutlined />}
        onClick={() => {
          onChangeActive(4);
        }}
      >
        Xóa
      </Menu.Item>
    </Menu>
  </>
);
MenuDocument.propTypes = {
  onChangeActive: PropTypes.func.isRequired,
};

export default MenuDocument;
