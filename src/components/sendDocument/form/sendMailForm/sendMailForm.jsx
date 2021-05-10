import './style.scss';

import { InputWithLabel } from '@/components/sendDocument/input/inputWithLabel/inputWithLabel';
import React from 'react';
import { Avatar } from 'antd';

export const SendMailForm = () => (
  <div className="send-mail-form">
    <div className="send-mail-form__body">
      <InputWithLabel
        className="input-horizontal"
        labelName="Chủ đề Email"
        placeHolder="Chủ đề"
      />
      <div className="message-mail">
        <label htmlFor="txtMess" className="message-mail__label">
          Thông điệp Email
        </label>
        <textarea
          id="txtMess"
          className="message-mail__input"
          placeholder="Tin nhắn"
        />
      </div>
    </div>
    <div className="partner-preview">
      <p className="partner-preview__title">Người nhận</p>
      <div className="partner-preview__body">
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
          <div className="partner__delete-btn">Xóa</div>
        </div>
      </div>
    </div>
  </div>
);
