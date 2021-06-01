import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '@/components/profile/index.less';

import MenuProfile from '@/components/profile/menu_profile';
import Back from '@/components/back/back.jsx';
import AvatarUser from '@/components/avatar/avatar.jsx';
import InfoUser from '@/components/profile/info_user';
import InfoUserItem from '@/components/profile/info_user_item';
import Header from '../components/header/header';
import ChangePasswordForm from '../components/profile/change_password_form';

const ProfilePage = () => (
  <>
    <Header />
    <div className="profile">
      <MenuProfile>
        <Back />
        <AvatarUser />
      </MenuProfile>
      <div className="profile--content">
        <Switch>
          <Route path="/profile/info">
            <InfoUser title="Thông tin cá nhân">
              <InfoUserItem label="Họ và tên" value="Nguyễn Văn A" />
              <InfoUserItem
                label="Địa chỉ Email"
                value="nguyenvana@gmail.com"
              />
              <InfoUserItem
                label="Địa chỉ"
                value="127/16 Âu Cơ, Phương 14, Quận 11, TP Hồ Chí Minh"
              />
              <InfoUserItem label="Số điện thoại" value="0978578645" />
              <InfoUserItem label="Ngành nghề" value="Lập trình viên" />
              <InfoUserItem label="Chức vụ" value="Nhân viên" />
            </InfoUser>
          </Route>
          <Route path="/profile/changePassword">
            <InfoUser title="Đổi mật khẩu">
              <ChangePasswordForm />
            </InfoUser>
          </Route>
        </Switch>
      </div>
    </div>
  </>
);

export default ProfilePage;
