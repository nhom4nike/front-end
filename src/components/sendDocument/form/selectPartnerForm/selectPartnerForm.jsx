import './style.scss';
import React from 'react';
import { Button } from '@/components/sendDocument/input/button/button';
import { Checkbox } from '@/components/sendDocument/input/checkbox/checkbox';
import { InputWithLabel } from '@/components/sendDocument/input/inputWithLabel/inputWithLabel';
import { Select } from '@/components/sendDocument/input/select/select';

export const SelectPartnerForm = () => (
  <div className="select-partner-form">
    <div className="select-partner-form__body">
      <InputWithLabel
        className="input-horizontal"
        type="text"
        name="partnerName"
        labelName="Tên người nhận"
        placeHolder="Nguyễn Văn A"
      />
      <InputWithLabel
        className="input-horizontal"
        type="text"
        name="partnerEmail"
        labelName="Địa chỉ Email"
        placeHolder="nguyen_van_a@gmail.com"
      />
      <Select
        className="select-horizontal"
        data={[]}
        defaultSelected="Lựa chọn quyền hạn"
        labelName="Quyền hạn"
        name="role"
      />
      <InputWithLabel
        className="input-horizontal"
        type="text"
        name="partnerName"
        labelName="Sử dụng khóa"
      >
        <Checkbox defaultChecked="true" />
      </InputWithLabel>
      <Button>Tạo mới</Button>
    </div>
    <div className="partner-preview">
      <p className="partner-preview__title">Người nhận</p>
      <div className="partner-preview__body">
        <div className="partner">
          <div className="partner__avatar" />
          <div className="partner__info">
            <p className="partner__name">Nguyễn Văn A</p>
            <h5 className="partner__email">nguyen_van_a@gmail.com</h5>
          </div>
          <div className="partner__delete-btn">Xóa</div>
        </div>

        <div className="partner">
          <div className="partner__avatar" />
          <div className="partner__info">
            <p className="partner__name">Nguyễn Văn A</p>
            <h5 className="partner__email">nguyen_van_a@gmail.com</h5>
          </div>
          <div className="partner__delete-btn">Xóa</div>
        </div>
      </div>
    </div>
  </div>
);
