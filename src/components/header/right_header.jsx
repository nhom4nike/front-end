import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { LanguageIcon, SettingIcon } from '@/components/icons/icon';
import { Link } from 'react-router-dom';

const menu = (
  <Menu className="dropdown-profile">
    <Menu.Item key="1">
      <h3>Nguyễn Văn A</h3>
      <span>nguyenvana@gmail.com</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="0">
      <a href="/profile">Trang cá nhân</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" onClick={() => localStorage.setItem('isLogin', 'false')}>
      <Link to="/login"> Đăng xuất </Link>
    </Menu.Item>
  </Menu>
);

const RightHeader = () => (
  <div className="wrap-header__right">
    <button type="button" className="btn-header-item">
      <LanguageIcon width="24" />
    </button>

    <button type="button" className="btn-header-item">
      <SettingIcon width="24" />
    </button>

    <Dropdown overlay={menu} trigger={['click']}>
      <Avatar
        style={{
          backgroundColor: '#EB5757',
          verticalAlign: 'middle',
          cursor: 'pointer',
        }}
        size="large"
        gap={1}
      >
        U
      </Avatar>
    </Dropdown>
  </div>
);

export default RightHeader;
