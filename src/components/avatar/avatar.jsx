import React from 'react';
import './avatar.less';
import { Avatar } from 'antd';

const AvatarUser = () => (
    <div className="wrap-avatar">
      <Avatar
        style={{
          backgroundColor: '#EB5757',
          verticalAlign: 'middle',
          cursor: 'pointer',
        }}
        size={64}
        gap={1}
      >
        U
      </Avatar>
      <div className="avatar-info">
        <span className="avatar-info-name">Nguyễn Văn A</span>
        <span className="avatar-info-email">nguyenvana@gmail.com</span>
      </div>
    </div>
  );

export default AvatarUser;
