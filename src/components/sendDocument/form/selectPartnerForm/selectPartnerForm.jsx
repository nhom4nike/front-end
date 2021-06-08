import './style.scss';
import React, { useState, useContext } from 'react';

import { Avatar } from 'antd';
import { Button } from '@/components/sendDocument/input/button/button';
import { Checkbox } from '@/components/sendDocument/input/checkbox/checkbox';
import { InputWithLabel } from '@/components/sendDocument/input/inputWithLabel/inputWithLabel';
import { Select } from '@/components/sendDocument/input/select/select';


import { pdfDocListContext } from '../../../../contants/contexts/pdfDocListContext';

export const SelectPartnerForm = () => {
  const { sendDocument, dispatch, actionType } = useContext(pdfDocListContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const handleAddPartner = () => {
    if (email.length === 0) return;
    dispatch({
      type: actionType.ADD_PARTNERS,
      payload: { name, email },
    });
    setEmail('');
    setName('');
  };

  const handleDeletePartner = (e) => {
    dispatch({
      type: actionType.REMOVE_PARTNER,
      payload: +e.target.getAttribute('data-id'),
    });
  };
  return (
    <div className="select-partner-form">
      <div className="select-partner-form__body">
        <InputWithLabel
          className="input-horizontal"
          type="text"
          value={name}
          onChange={(e) => {
          setName(e.target.value);
          }}

          name="partnerName"
          labelName="Tên người nhận"
          placeHolder="Nguyễn Văn A"
        />
        <InputWithLabel
          className="input-horizontal"
          type="text"
          value={email}
          onChange={(e) => {
          setEmail(e.target.value);
          }}

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
        <Button onClick={handleAddPartner}>Tạo mới</Button>
      </div>
      <div className="partner-preview">
        <p className="partner-preview__title">Danh sách người nhận</p>
        <div className="partner-preview__body">
          {sendDocument.partners.length > 0 ? (
            sendDocument.partners.map((partner, index) => (
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
                  <p className="partner__name">{partner.name}</p>
                  <h5 className="partner__email">{partner.email}</h5>
                </div>
                <div
                  role="button"
                  tabIndex="0"
                  data-id={index}
                  className="partner__delete-btn"
                  onClick={handleDeletePartner}
                >
                  Xóa
                </div>
              </div>
            ))
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
