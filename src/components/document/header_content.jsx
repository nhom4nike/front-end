import React from 'react';
import { Button , Typography } from 'antd';
import '@/styles/document.css';


const { Title } = Typography;

const HeaderContent = () => (
    <div className="header-content">
      <span>
        <Title level={4}>Bản mẫu của tôi</Title>
        <p style={{ opacity: '0.6' }}>
          Quản lý các bản mẫu đã tạo. Có thể thêm xóa sửa bản mẫu
        </p>
      </span>
      <Button type="primary">Gửi bản mẫu</Button>
    </div>
  );

export default HeaderContent;
