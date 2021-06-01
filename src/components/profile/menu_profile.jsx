import React from 'react';
import { NavLink } from 'react-router-dom';
import { InfoIcon, SignIcon } from '@/components/icons/icon';

const MenuProfile = ({ children }) => (
  <div className="wrap-menu-profile">
    {children}
    <NavLink to="/profile/info" className="link" activeClassName="active-link">
      <InfoIcon width="24" />
      <span>Thông tin cá nhân</span>
    </NavLink>
    <NavLink
      to="/profile/changePassword"
      className="link"
      activeClassName="active-link"
    >
      <SignIcon width="24" />
      <span>Đổi mật khẩu</span>
    </NavLink>
  </div>
);

export default MenuProfile;
