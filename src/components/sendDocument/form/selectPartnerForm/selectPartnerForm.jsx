import './style.scss';
import React, { useState } from 'react';
import { Avatar } from 'antd';
import { Button } from '@/components/sendDocument/input/button/button';
import { Checkbox } from '@/components/sendDocument/input/checkbox/checkbox';
import { InputWithLabel } from '@/components/sendDocument/input/inputWithLabel/inputWithLabel';
import { Select } from '@/components/sendDocument/input/select/select';

export const SelectPartnerForm = () => {
  const [hasData, setHasData] = useState(false);
  return (
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
        <Button onClick={() => setHasData(true)}>Tạo mới</Button>
      </div>
      <div className="partner-preview">
        <p className="partner-preview__title">Danh sách người nhận</p>
        <div className="partner-preview__body">
          {hasData ? (
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
          ) : (
            <div
              style={{
                height: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span>Chưa chọn có người nhận</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
