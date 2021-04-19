import React, { useState } from 'react';
import { Modal, Tabs } from 'antd';

import ChooseSignatureItem from './choose_signature_item';
import UploadSignature from './upload_signature';
import DrawSignature from './draw_signature';

const { TabPane } = Tabs;

const CreateSignature = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <button
        type="button"
        className="btn-create-signature"
        onClick={showModal}
      >
        <span className="btn-create-signature__label">Chữ ký của tôi:</span>
        <span className="btn-create-signature__content">A Nguyễn</span>
      </button>
      <Modal
        title="Tạo chữ ký"
        className="modal-create-signature"
        centered
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Tạo mới"
        cancelText="Hủy bỏ"
      >
        <div className="name-and-initial">
          <div className="name-item">
            <span className="name-item__label">Họ và tên:</span>
            <input
              type="text"
              className="name-item__input"
              disabled
              value="Nguyễn Văn A"
            />
          </div>
          <div className="name-item">
            <span className="name-item__label">Tên viết tắt:</span>
            <input
              type="text"
              className="name-item__input"
              disabled
              value="NA"
            />
          </div>
        </div>
        <Tabs defaultActiveKey="1" className="tabs-choose-signature">
          <TabPane tab="Lựa chọn" key="1">
            <>
              <ChooseSignatureItem
                data={{ name: 'Nguyễn Văn A', initial: 'NA' }}
                selected
              />
              <ChooseSignatureItem
                data={{ name: 'Nguyễn Văn A', initial: 'NA' }}
              />
              <ChooseSignatureItem
                data={{ name: 'Nguyễn Văn A', initial: 'NA' }}
              />
            </>
          </TabPane>
          <TabPane tab="Vẽ tay" key="2">
            <DrawSignature />
          </TabPane>
          <TabPane tab="Tải lên" key="3">
            <UploadSignature />
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default CreateSignature;
