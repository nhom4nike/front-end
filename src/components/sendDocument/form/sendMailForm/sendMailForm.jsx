import './style.scss';
import WebViewer from '@pdftron/webviewer';
import { InputWithLabel } from '@/components/sendDocument/input/inputWithLabel/inputWithLabel';
import React, { useEffect, useContext, useRef } from 'react';
import { Avatar } from 'antd';

import { pdfDocListContext } from '../../../../contants/contexts/pdfDocListContext';

export const SendMailForm = () => {
  const { sendDocument, dispatch, actionType, setInstanced } = useContext(
    pdfDocListContext
  );
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/lib',
      },
      viewer.current
    ).then((instance) => {
      setInstanced(instance);
    });
  }, []);
  return (
    <div className="send-mail-form">
      <div className="send-mail-form__body">
        <InputWithLabel
          className="input-horizontal"
          labelName="Chủ đề Email"
          placeHolder="Chủ đề"
          value={sendDocument.title}
          onChange={(e) => {
            dispatch({
              type: actionType.UPDATE_TITLE,
              payload: e.target.value,
            });
          }}
        />
        <div className="message-mail">
          <label htmlFor="txtMess" className="message-mail__label">
            Thông điệp Email
          </label>
          <textarea
            id="txtMess"
            value={sendDocument.message}
            onChange={(e) => {
              dispatch({
                type: actionType.UPDATE_MESSAGE,
                payload: e.target.value,
              });
            }}
            className="message-mail__input"
            placeholder="Tin nhắn"
          />
        </div>
      </div>
      <div className="partner-preview">
        <p className="partner-preview__title">Người nhận</p>
        <div className="partner-preview__body">
          {sendDocument.partners.length === 0 ? (
            <p>Chưa có dữ liệu người nhận</p>
          ) : (
            sendDocument.partners.map((partner) => (
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
                    U
                  </Avatar>
                </div>
                <div className="partner__info">
                  <p className="partner__name">{partner.name}</p>
                  <h5 className="partner__email">{partner.email}</h5>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div
        className="webviewer"
        ref={viewer}
        style={{ opacity: '0', width: '0rem', height: '0rem' }}
      />
    </div>
  );
};
