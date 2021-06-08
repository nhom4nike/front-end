import './style.scss';
import React from 'react';
import { Avatar } from 'antd';

// import { pdfDocListContext } from '../../../../contants/contexts/pdfDocListContext';

const ResultSend = () => (
  <div className="wrap-partner">
    <div className="partner">
      <div className="partner__avatar">
        <Avatar
          style={{
            backgroundColor: '#EB5757',
            verticalAlign: 'middle',
            cursor: 'pointer',
          }}
          size={48}
          gap={1}
        >
          B
        </Avatar>
      </div>
      <div className="partner__info">
        <p className="partner__name">Nguyễn Văn B</p>
        <h5 className="partner__email">nguyen_van_b@gmail.com</h5>
      </div>
      <div className="partner__delete-btn">Đã gửi thành công</div>
    </div>
  </div>
);

export default ResultSend;
