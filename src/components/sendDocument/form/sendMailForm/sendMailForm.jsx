import './style.scss';

import { InputWithLabel } from '@/components/sendDocument/input/inputWithLabel/inputWithLabel';
import React from 'react';

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
          <div className="partner__avatar" />
          <div className="partner__info">
            <p className="partner__name">Nguyễn Văn A</p>
            <h6 className="partner__email">nguyen_van_a@gmail.com</h6>
          </div>
          <div className="partner__delete-btn">Xóa</div>
        </div>

        <div className="partner">
          <div className="partner__avatar" />
          <div className="partner__info">
            <p className="partner__name">Nguyễn Văn A</p>
            <h6 className="partner__email">nguyen_van_a@gmail.com</h6>
          </div>
          <div className="partner__delete-btn">Xóa</div>
        </div>
      </div>
    </div>
  </div>
);
