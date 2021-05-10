import React from 'react';

const InfoUser = ({ children }) => (
    <div className="info-user">
      <div className="info-user--head">
        <div className="info-user--head--right">
          <h2>Thông tin cá nhân</h2>
          <span>
            Quản lý thông tin hồ sơ cá nhân của bạn để kiểm soát những chi tiết
            nào được chia sẻ với những người dùng NikeSign khác.
          </span>
        </div>
      </div>
      <div className="info-user--body">{children}</div>
    </div>
  );

export default InfoUser;
