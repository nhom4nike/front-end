import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { LanguageIcon, SettingIcon } from '@/components/icons/icon';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
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
