import React from 'react';
import '@/components/profile/index.less';

import MenuProfile from '@/components/profile/menu_profile';
import Back from '@/components/back/back.jsx';
import AvatarUser from '@/components/avatar/avatar.jsx';
import InfoUser from '@/components/profile/info_user';
import InfoUserItem from '@/components/profile/info_user_item';
import Header from '../components/header/header';

const ProfilePage = () => (
    <>
      <Header />
      <div className="profile">
        <MenuProfile>
          <Back />
          <AvatarUser />
        </MenuProfile>
        <div className="profile--content">
          <InfoUser>
            <InfoUserItem label="Họ và tên" value="Nguyễn Văn A" />
            <InfoUserItem label="Địa chỉ Email" value="nguyenvana@gmail.com" />
            <InfoUserItem
              label="Địa chỉ"
              value="127/16 Âu Cơ, Phương 14, Quận 11, TP Hồ Chí Minh"
            />
            <InfoUserItem label="Số điện thoại" value="0978578645" />
            <InfoUserItem label="Ngành nghề" value="Lập trình viên" />
            <InfoUserItem label="Chức vụ" value="Nhân viên" />
          </InfoUser>
        </div>
      </div>
    </>
  );

export default ProfilePage;
